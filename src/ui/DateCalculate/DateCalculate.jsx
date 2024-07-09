import {
  Center,
  HStack,
  Heading,
  Input,
  InputGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDateCalculate } from '../../hooks/useDateCalculate';

export const DateCalculate = () => {
  const {
    initialDate,
    finalDate,
    difference,
    changeInitialDate,
    changeFinalDate,
  } = useDateCalculate();

  return (
    <VStack pb="40%" gap="50px">
      <InputGroup>
        <Text>C: </Text>
        <Input type="date" value={initialDate} onChange={changeInitialDate} />
      </InputGroup>

      <InputGroup>
        <Text>До: </Text>
        <Input type="date" value={finalDate} onChange={changeFinalDate} />
      </InputGroup>

      <VStack>
        <Heading>Разница</Heading>
        <Center>
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
        </Center>
      </VStack>
    </VStack>
  );
};
