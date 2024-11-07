import { Flex, Divider } from '@chakra-ui/react';
import { useHistoryContext } from '../../context/historyContext';
import { useCalculator } from '../../hooks/useCalculator';
import { addElementInArray } from '../../utils/addElementInArray';
import { getButtonId } from '../../utils/mathFunction';
import { ExpressionView } from '../../ui/ExpressionView';
import { ButtonsGroupCalcArea } from '../../ui/ButtonsGroupCalcArea/ButtonsGroupCalcArea';

export const CalculatorPage = () => {
  const { history, setHistory } = useHistoryContext();
  const { expression, resultCalc, calculateExpression } = useCalculator();

  const addHistory = () => {
    setHistory(
      addElementInArray({
        array: history,
        counting: expression,
        result: resultCalc,
        page: 'calculator',
      }),
    );
  };

  const handelClickButtonsGroupArea = (e) => {
    const buttonID = getButtonId(e);
    const isEqual = buttonID === 'btn-equal';
    const isDelete = buttonID === 'btn-delete';

    if (isEqual) {
      calculateExpression(e);
      addHistory();
    } else if (isDelete) {
      calculateExpression(e);
      setHistory([]);
    } else {
      calculateExpression(e);
    }
  };

  return (
    <Flex direction="column" justify="space-between" gap={4} h="100%">
      <ExpressionView
        expressionUp={expression}
        expressionDown={resultCalc}
        size="lg"
      ></ExpressionView>

      <Divider />

      <ButtonsGroupCalcArea onClick={handelClickButtonsGroupArea} />
    </Flex>
  );
};
