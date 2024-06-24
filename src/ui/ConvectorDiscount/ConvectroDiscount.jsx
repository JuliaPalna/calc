import { Text } from '@chakra-ui/react';
import { InputData } from '../InputData';

import React from 'react';

export const ConvectorDiscount = ({ result }) => {
  return (
    <React.Fragment>
      <InputData w="120px" />
      <Text>Окончательная цена - {result}</Text>
      <Text>Bы экономите - {result}</Text>
    </React.Fragment>
  );
};
