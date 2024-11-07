import { Box, Flex, Select } from '@chakra-ui/react';
import { ExpressionView } from '../ExpressionView';

export const SelectUnit = ({ onChange, array, value, refSelect, nameOKEI }) => {
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Select
          onChange={onChange}
          ref={(e) => {
            refSelect.current = e;
          }}
        >
          {array.map((item) => {
            return (
              <option
                key={item.id}
                data-shortnameokei={item.shortnameOKEI}
                data-name={item.nameOKEI}
                data-measure={item.measure}
              >
                {item.shortnameOKEI}
              </option>
            );
          })}
        </Select>
      </Box>

      <ExpressionView
        expressionUp={value}
        expressionDown={nameOKEI}
        size="sm"
      />
    </Flex>
  );
};
