import React from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Flex,
} from '@chakra-ui/react';
import { useDiscountConv } from '../../hooks/useDiscountConv';
import { ButtonsGroupCalcAreaMin } from '../ButtonsGroupCalcAreaMin';

export const DesktopViewDiscountConv = () => {
  const { inputPrice, inputDiscount, result, setInput } = useDiscountConv();

  return (
    <Flex direction="column" justify="space-between" gap={4} h="100%">
      <Flex direction="column" justify="space-between" gap={4}>
        <InputGroup>
          <InputLeftAddon>Цена: </InputLeftAddon>
          <Input
            type="number"
            value={inputPrice.value}
            onChange={inputPrice.onChange}
            autoFocus={inputPrice.focus}
            onFocus={inputPrice.onFocus}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Скидка: </InputLeftAddon>
          <Input
            type="number"
            value={inputDiscount.value}
            onChange={inputDiscount.onChange}
            autoFocus={inputDiscount.focus}
            onFocus={inputDiscount.onFocus}
          />
        </InputGroup>
      </Flex>

      <Box>
        <Text>Окончательная цена - {result.value}</Text>
        <Text>Bы экономите - {result.difference}</Text>
      </Box>

      <ButtonsGroupCalcAreaMin onClick={setInput} />
    </Flex>
  );
};
