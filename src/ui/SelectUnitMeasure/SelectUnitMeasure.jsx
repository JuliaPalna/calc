import { Flex, Text, Select } from '@chakra-ui/react';

export function SelectUnitMeasure({ onChange, name, nameOKEI, value, elements }) {
  return (
    <Flex justifyContent="space-between">
      <Select
        size="lg"
        w="30%"
        variant="flushedи"
        colorScheme="purple"
        name={`selected-${name}`}
        // ref={props.sel}
        // defaultValue={valueOption}
        onChange={onChange}
      >
        {elements}
      </Select>

      <Flex flexDirection="column" w="70%">
        <Text type="number" h="40px" textAlign="right" p="5px">
          {value}
        </Text>
        <Text type="text" h="40px" textAlign="right" pr="5px">
          {nameOKEI}
        </Text>
      </Flex>
    </Flex>
  );
}
