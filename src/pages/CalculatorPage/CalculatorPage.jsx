import { Grid, GridItem, Flex, SimpleGrid } from '@chakra-ui/react';

import { useHistory } from '../../context/historyContext';

import { useCalculator } from '../../hooks/useCalculator';

import { ExpressionView } from '../../ui/ExpressionView';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { GroupButtonsMathOperator } from '../../ui/GroupButtonsMathOperator';
import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { ButtonEqual } from '../../ui/ButtonEqual';
import { ButtonPercent } from '../../ui/ButtonPercent';
import { ButtonPoint } from '../../ui/ButtonPoint';
import { GridButtonsNumbers } from '../../ui/GridButtonNumbers/GridButtonNumbers';
import { addHistory } from '../../utils/addHistory';
import { getElementID } from '../../utils/mathFunction';

export function CalculatorPage() {
  const { expression, resultCalc, calculateExpression } = useCalculator();
  const { history, setHistory } = useHistory();

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
    const element = getElementID(e);

    if (element === 'btn-delete') setHistory([]);
  };

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="2fr .2fr .5fr 2fr"
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

      <GridItem rowStart={3} rowEnd={4} colStart={1} colEnd={5}>
        <SimpleGrid columns={4} spacing={2}>
          <GroupButtonsDelete onClick={handelClickButtonDelete} />
          <ButtonPercent onClick={calculateExpression} />
        </SimpleGrid>
      </GridItem>

      <GridItem rowStart={3} rowEnd={5} colStart={4} colEnd={4} gap={2}>
        <Flex direction="column" gap={2}>
          <GroupButtonsMathOperator onClick={calculateExpression} />
          <ButtonEqual onClick={handelClickButtonEqual} />
        </Flex>
      </GridItem>

      <GridButtonsNumbers>
        <GoupButtonsNumbers onClick={calculateExpression} />
        <ButtonPoint onClick={calculateExpression} />
      </GridButtonsNumbers>
    </Grid>
  );
}
