import { Flex } from '@chakra-ui/react';

import { useConvector } from '../../hooks/useConvector';
import { getElementID } from '../../utils/mathFunction';

import { SelectUnit } from '../SelectUnit';
import { ButtonsGroupCalcAreaMin } from '../ButtonsGroupCalcAreaMin';

export const DesktopViewCustomConv = ({ array }) => {
  const { convector, selectFirst, selectSecond } = useConvector(array);

  const handelClickButtonsGroupArea = (e) => {
    const buttonID = getElementID(e);
    convector.calculateExpression(buttonID);
  };

  return (
    <Flex direction="column" justify="space-between" gap={2} h="100%">
      <SelectUnit
        refSelect={selectFirst.ref}
        array={array}
        onChange={selectFirst.fn}
        value={convector.expression}
        nameOKEI={selectFirst.OKEI}
      />

      <SelectUnit
        refSelect={selectSecond.ref}
        array={array}
        onChange={selectSecond.fn}
        value={convector.result}
        nameOKEI={selectSecond.OKEI}
      />

      <ButtonsGroupCalcAreaMin onClick={handelClickButtonsGroupArea} />
    </Flex>
  );
};
