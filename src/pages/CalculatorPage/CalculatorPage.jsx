import { Grid, GridItem, Flex, SimpleGrid } from '@chakra-ui/react';

import { useHistoryContext } from '../../context/historyContext';

import { useCalculator } from '../../hooks/useCalculator';

import { ExpressionView } from '../../ui/ExpressionView';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { GroupButtonsMathOperator } from '../../ui/GroupButtonsMathOperator';
import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { ButtonEqual } from '../../ui/ButtonEqual';
import { ButtonPercent } from '../../ui/ButtonPercent';
import { ButtonPoint } from '../../ui/ButtonPoint';
import { addHistory } from '../../utils/addHistory';
import { getElementID } from '../../utils/mathFunction';

export const CalculatorPage = () => {
  const { expression, resultCalc, calculateExpression } = useCalculator();
  const { history, setHistory } = useHistoryContext();

  const handelClickButtonEqual = (e) => {
    calculateExpression(e);
    setHistory(
      addHistory({
        array: history,
        counting: expression,
        result: resultCalc,
        page: 'calculator',
      }),
    );
  };

  const handelClickButtonDelete = (e) => {
    calculateExpression(e);
    const isDelete = getElementID(e) === 'btn-delete';

    isDelete && setHistory([]);
  };

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="2fr .3fr 1.5fr"
      minH={500}
      maxH={500}
      gap={2}
    >
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={5}>
        <ExpressionView
          expressionUp={expression}
          expressionDown={resultCalc}
        ></ExpressionView>
      </GridItem>

      <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={5}>
        <SimpleGrid columns={4} spacing={2}>
          <GroupButtonsDelete onClick={handelClickButtonDelete} />
          <ButtonPercent onClick={calculateExpression} />
        </SimpleGrid>
      </GridItem>

      <GridItem rowStart={2} rowEnd={4} colStart={4} colEnd={4} gap={2}>
        <Flex direction="column" gap={2}>
          <GroupButtonsMathOperator onClick={calculateExpression} />
          <ButtonEqual onClick={handelClickButtonEqual} />
        </Flex>
      </GridItem>

      <GridItem rowStart={3} rowEnd={3} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} spacing={2}>
          <GoupButtonsNumbers onClick={calculateExpression} />
          <ButtonPoint onClick={calculateExpression} />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
