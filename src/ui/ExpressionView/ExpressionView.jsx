import { VStack, Text } from '@chakra-ui/react';

export const ExpressionView = ({ expressionUp, expressionDown, size }) => {
  return (
    <VStack>
      <Text>{expressionUp}</Text>
      <Text size={size}>{expressionDown}</Text>
    </VStack>
  );
};
