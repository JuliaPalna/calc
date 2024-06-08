import React from 'react';
import { HStack, Text, Input } from '@chakra-ui/react';

export function InputData({ array, type, w, counts, onChange }) {
  const elements = array.map((item, i) => {
    return (
      <HStack key={`dis-${i}`} justify="space-between">
        <Text>{item.value}</Text>
        <Input
          type={type}
          w={w}
          textAlign="right"
          variant="unstyled"
          value={counts[i]}
          onChange={onChange}
        />
      </HStack>
    );
  });

  return elements;
}
