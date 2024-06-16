import { HStack, Text, Input } from '@chakra-ui/react';

export function InputData({ array, type, w, counts, onChange }) {
  const elements = array.map((item, i) => {
    return (
      <HStack>
        <Text>{item.value}</Text>
        <Input
          // type={type}
          textAlign="right"
          // value={counts[i]}
          onChange={onChange}
        />
      </HStack>
    );
  });

  return elements;
}
