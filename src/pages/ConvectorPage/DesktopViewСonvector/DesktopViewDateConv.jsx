import {
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDateConv } from '../../../hooks/useDateConv';

export const DesktopViewDateConv = () => {
  const { initialDate, finalDate, difference, changeDate } = useDateConv();

  return (
    <Flex direction="column" justify="space-between" gap={4}>
      <InputGroup>
        <InputLeftAddon>C:</InputLeftAddon>
        <Input
          id="initialDate"
          type="date"
          value={initialDate}
          onChange={changeDate}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon>До:</InputLeftAddon>
        <Input
          id="finalDate"
          type="date"
          value={finalDate}
          onChange={changeDate}
        />
      </InputGroup>

      <VStack>
        <Heading>Разница</Heading>
        <HStack align="start" gap="35px">
          <VStack gap="15px">
            <Text>Лет</Text>
            <Text>{difference.years}</Text>
          </VStack>

          <VStack gap="15px">
            <Text>Месяцев</Text>
            <Text>{difference.months}</Text>
          </VStack>

          <VStack gap="15px">
            <Text>Дней</Text>
            <Text>{difference.days}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};
