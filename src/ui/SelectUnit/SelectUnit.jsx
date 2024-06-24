import { useRef, useState } from 'react';
import { Flex, Select } from '@chakra-ui/react';
import { ExpressionView } from '../ExpressionView';

export const SelectUnit = ({ onChange, array, value, refSelect }) => {
  const unitRef = useRef(null);

  const [nameOKEI, setNameOKEI] = useState(array[0].nameOKEI);

  const handelChangeOption = () => {
    setNameOKEI(
      unitRef.current.selectedOptions[0].attributes['data-name'].value,
    );
    onChange(
      unitRef.current.selectedOptions[0].attributes['data-measure'].value,
    );
  };

  return (
    <Flex justifyContent="space-between">
      <Select
        onChange={handelChangeOption}
        w={20}
        ref={(e) => {
          unitRef.current = e;
          refSelect.current = e;
        }}
      >
        {array.map((item) => {
          return (
            <option
              key={item.id}
              data-shortnameOKEI={item.shortnameOKEI}
              data-name={item.nameOKEI}
              data-measure={item.measure}
            >
              {item.shortnameOKEI}
            </option>
          );
        })}
      </Select>

      <ExpressionView expressionUp={value} expressionDown={nameOKEI} />
    </Flex>
  );
};
