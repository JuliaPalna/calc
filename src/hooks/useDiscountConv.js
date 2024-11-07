import { useState } from 'react';
import { calculateDiscount } from '../utils/calculateDiscount';
import { getButtonId } from '../utils/mathFunction';
import { getMathExpression } from '../utils/getMathExpression';

export const useDiscountConv = () => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [result, setResult] = useState({ value: 0, difference: 0 });

  const [inputPriceActive, setInputPriceActive] = useState(true);
  const [inputDiscountActive, setInputDiscountActive] = useState(false);

  const focusInputDiscount = () => {
    setInputPriceActive(false);
    setInputDiscountActive(true);
  };

  const focusInputPrice = () => {
    setInputPriceActive(true);
    setInputDiscountActive(false);
  };

  const changeInput = (e) => {
    const inputId = e.target.id;
    const value = e.target.value;
    let result = 0;
    let difference = 0;

    if (inputId === 'price') {
      [result, difference] = changePrice(value);
    } else {
      [result, difference] = changeDiscount(value);
    }

    setResult({ value: result, difference: difference });
  };

  const setInput = (e) => {
    const buttonId = getButtonId(e);

    let result = 0;
    let difference = 0;

    if (buttonId === 'btn-delete') {
      setPrice(0);
      setDiscount(0);
      setResult({ value: result, difference: difference });
      return;
    }

    if (inputPriceActive === true) {
      const newPrice = getMathExpression(price, buttonId);
      [result, difference] = changePrice(newPrice);
    }

    if (inputDiscountActive === true) {
      const newDiscount = getMathExpression(discount, buttonId);
      [result, difference] = changeDiscount(newDiscount);
    }

    setResult({ value: result, difference: difference });
  };

  const changePrice = (value) => {
    setPrice(value);
    const result = calculateDiscount({ price: value, discount });
    const difference = value - result;
    return [result, difference];
  };

  const changeDiscount = (value) => {
    setDiscount(value);
    const result = calculateDiscount({ price, discount: value });
    const difference = price - result;
    return [result, difference];
  };

  const inputPrice = {
    value: price,
    focus: inputPriceActive,
    onFocus: focusInputPrice,
  };

  const inputDiscount = {
    value: discount,
    focus: inputDiscountActive,
    onFocus: focusInputDiscount,
  };

  return { inputPrice, inputDiscount, result, setInput, changeInput };
};
