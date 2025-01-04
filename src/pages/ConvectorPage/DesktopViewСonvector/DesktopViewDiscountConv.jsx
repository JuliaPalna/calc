import React from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Flex,
} from '@chakra-ui/react';
import { useDiscountConv } from '../../../hooks/useDiscountConv';
import { ButtonsGroupCalcAreaMin } from '../../../ui/ButtonsGroupCalcAreaMin';

export const DesktopViewDiscountConv = () => {
  const { inputPrice, inputDiscount, result, setInput, changeInput } =
    useDiscountConv();

  return (
    <Flex direction="column" justify="space-between" gap={4} h="100%">
      <Flex direction="column" justify="space-between" gap={4}>
        <InputGroup>
          <InputLeftAddon>Цена: </InputLeftAddon>
          <Input
            id="price"
            type="number"
            value={inputPrice.value}
            onChange={changeInput}
            autoFocus={inputPrice.focus}
            onFocus={inputPrice.onFocus}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>Скидка: </InputLeftAddon>
          <Input
            id="discount"
            type="number"
            value={inputDiscount.value}
            onChange={changeInput}
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
