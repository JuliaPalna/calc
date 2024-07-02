import { useState } from 'react';
import { calculateDiscount } from '../utils/calculateDiscount';

export const useDiscountCalculate = () => {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);
  const [finalPrice, setFinalPrice] = useState(90);

  const calculateFinalPrice = ({ price, discount }) => {
    const result = calculateDiscount({ price, discount });
    setFinalPrice(result);
  };

  const changeInputPrice = (e) => {
    const newValue = e.target.value;
    setPrice(newValue);
    calculateFinalPrice({ price: newValue, discount });
  };

  const changeInputDiscount = (e) => {
    const newValue = e.target.value;
    setDiscount(newValue);
    calculateFinalPrice({ price, discount: newValue });
  };

  return { price, finalPrice, discount, changeInputPrice, changeInputDiscount };
};
