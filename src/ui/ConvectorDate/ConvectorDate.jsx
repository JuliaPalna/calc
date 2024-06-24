import { Center, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { InputData } from '../InputData';

export const ConvectorDate = () => {
  return (
    <VStack pb="40%" gap="50px" align="stretch">
      <VStack align="stretch" spacing={10}>
        <InputData />
      </VStack>

      <VStack p="50px 0">
        <Heading pb="20px">Разница</Heading>
        <Center>
          <HStack align="start" gap="35px">
            <VStack gap="15px">
              <Text>Лет</Text>
              <Text h="20px"></Text>
            </VStack>

            <VStack gap="15px">
              <Text>Месяцев</Text>
              <Text h="20px"></Text>
            </VStack>

            <VStack gap="15px">
              <Text>Дней</Text>
              <Text h="20px"></Text>
            </VStack>
          </HStack>
        </Center>
      </VStack>
    </VStack>
  );
};
