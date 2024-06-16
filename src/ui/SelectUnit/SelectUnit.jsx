import { Flex, Select } from '@chakra-ui/react';
import { ExpressionView } from '../ExpressionView';

export const SelectUnit = ({ onChange, array, value }) => {
  return (
    <Flex justifyContent="space-between">
      <Select onChange={onChange} w={20}>
        {array.map((item) => {
          return (
            <option
              key={item.name}
              value={item.shortnameOKEI}
              data-name={item.nameOKEI}
              data-measure={item.measure}
            >
              {item.shortnameOKEI}
            </option>
          );
        })}
      </Select>

      <ExpressionView expressionUp={value} expressionDown={'OKEI'} />
    </Flex>
  );
};
