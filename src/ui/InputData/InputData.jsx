import { HStack, Text, Input } from '@chakra-ui/react';

export const InputData = ({ array, type, w, counts, onChange }) => {
  const elements = array.map((item, i) => {
    return (
      <HStack>
        <Text>{item.value}</Text>
        <Input textAlign="right" onChange={onChange} />
      </HStack>
    );
  });

  return elements;
};
