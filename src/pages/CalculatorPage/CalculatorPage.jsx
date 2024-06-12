import { Grid, GridItem, Flex, SimpleGrid } from '@chakra-ui/react';
import { ExpressionView } from '../../ui/ExpressionView';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { GroupButtonsMathOperator } from '../../ui/GroupButtonsMathOperator';
import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { ButtonEqual } from '../../ui/ButtonEqual';
import { ButtonPercent } from '../../ui/ButtonPercent';
import { useCalculator } from '../../hooks/useCalculator';
import { ButtonPoint } from '../../ui/ButtonPoint';

export function CalculatorPage() {
  const [mathExpression, result, setExpression] = useCalculator();

  return (
    <Grid templateColumns="repeat(4, 1fr)" templateRows="2fr .2fr .5fr 2fr" minH={500} gap={2}>
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={5}>
        <ExpressionView expressionUp={mathExpression} expressionDown={result}></ExpressionView>
      </GridItem>
      <GridItem rowStart={3} rowEnd={4} colStart={1} colEnd={5}>
        <SimpleGrid columns={4} spacing={2}>
          <GroupButtonsDelete onClick={setExpression} />
          <ButtonPercent onClick={setExpression} />
        </SimpleGrid>
      </GridItem>
      <GridItem rowStart={3} rowEnd={5} colStart={4} colEnd={4} gap={2}>
        <Flex direction="column" gap={2}>
          <GroupButtonsMathOperator onClick={setExpression} />
          <ButtonEqual onClick={setExpression} />
        </Flex>
      </GridItem>
      <GridItem rowStart={4} rowEnd={4} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} spacing={2}>
          <GoupButtonsNumbers onClick={setExpression} />
          <ButtonPoint onClick={setExpression} />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}
