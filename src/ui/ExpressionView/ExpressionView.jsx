import { VStack, Text } from '@chakra-ui/react';

export function ExpressionView({ expressionUp, expressionDown }) {
  return (
    <VStack>
      <Text textAlign="right" w="100%" h="40px" fontSize="2xl">
        {expressionUp}
      </Text>
      <Text textAlign="right" w="100%" h="40px" fontSize="3xl">
        {expressionDown}
      </Text>
    </VStack>
  );
}
