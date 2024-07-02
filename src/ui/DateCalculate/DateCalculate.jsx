import { Center, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { useDateCalculate } from '../../hooks/useDateCalculate';

export function DateCalculate() {
  const { date, setDate, result } = useDateCalculate();

  return (
    <VStack pb="40%" gap="50px" align="stretch">
      <VStack align="stretch" spacing={10}>
        <Input type="date" value={date} onChange={setDate} />
      </VStack>

      <VStack p="50px 0">
        <Heading pb="20px">Разница</Heading>
        <Center>
          <HStack align="start" gap="35px">
            <VStack gap="15px">
              <Text>Лет</Text>
              <Text h="20px">{result.year}</Text>
            </VStack>

            <VStack gap="15px">
              <Text>Месяцев</Text>
              <Text h="20px">{result.month}</Text>
            </VStack>

            <VStack gap="15px">
              <Text>Дней</Text>
              <Text h="20px">{result.day}</Text>
            </VStack>
          </HStack>
        </Center>
      </VStack>
    </VStack>
  );
}
