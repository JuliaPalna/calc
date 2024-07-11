import { useState } from 'react';
import { calculateDiscount } from '../utils/calculateDiscount';
import { getElementID } from '../utils/mathFunction';
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

  const changeInputPrice = (e) => {
    const newValue = e.target.value;
    setPrice(newValue);
    const result = calculateDiscount({ price: newValue, discount });
    const difference = newValue - result;
    setResult({ value: result, difference: difference });
  };

  const changeInputDiscount = (e) => {
    const newValue = e.target.value;
    setDiscount(newValue);
    const result = calculateDiscount({ price, discount: newValue });
    const difference = price - result;
    setResult({ value: result, difference: difference });
  };

  const setInput = (e) => {
    const buttonID = getElementID(e);

    if (buttonID === 'btn-delete') {
      setPrice(0);
      setDiscount(0);
      setResult({ value: 0, difference: 0 });
      return;
    }

    if (inputPriceActive === true) {
      const newPrice = getMathExpression(price, buttonID);
      setPrice(newPrice);
      const result = calculateDiscount({ price: newPrice, discount });
      const difference = newPrice - result;
      setResult({ value: result, difference: difference });
    }

    if (inputDiscountActive === true) {
      const newDiscount = getMathExpression(discount, buttonID);
      setDiscount(newDiscount);
      const result = calculateDiscount({ price, discount: newDiscount });
      const difference = price - result;
      setResult({ value: result, difference: difference });
    }
  };

  const inputPrice = {
    value: price,
    onChange: changeInputPrice,
    focus: inputPriceActive,
    onFocus: focusInputPrice,
  };

  const inputDiscount = {
    value: discount,
    onChange: changeInputDiscount,
    focus: inputDiscountActive,
    onFocus: focusInputDiscount,
  };

  return { inputPrice, inputDiscount, result, setInput };
};
