import React from 'react';
import { Input, InputGroup, Text } from '@chakra-ui/react';
import { useDiscountCalculate } from '../../hooks/useDiscountCalculate';

export const DiscountCalculate = () => {
  const { price, finalPrice, discount, changeInputPrice, changeInputDiscount } =
    useDiscountCalculate();

  return (
    <React.Fragment>
      <InputGroup>
        <Text mb="8px">Цена: </Text>
        <Input type="number" value={price} onChange={changeInputPrice} />
      </InputGroup>

      <InputGroup>
        <Text mb="8px">Скидка: </Text>
        <Input type="number" value={discount} onChange={changeInputDiscount} />
      </InputGroup>

      <Text>Окончательная цена - {finalPrice}</Text>
      <Text>Bы экономите - {price - finalPrice}</Text>
    </React.Fragment>
  );
};
