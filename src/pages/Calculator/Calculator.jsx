import { useContext, useState } from 'react';
import { Grid, GridItem, Flex, SimpleGrid } from '@chakra-ui/react';
import { ExpressionView } from '../../ui/ExpressionView';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { GroupButtonsMathOperator } from '../../ui/GroupButtonsMathOperator';
import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { ButtonEqual } from '../../ui/ButtonEqual';
import { HistoryContext } from '../Menu';

export function Calculator() {
  const [value, setValue] = useState({
    counting: '0',
    result: '0',
  });

  const { history, setHistory } = useContext(HistoryContext);

  const handelClickButtonNumber = (e) => {
    if (value.counting === '0') {
      setValue({
        counting: e.target.id,
        result: e.target.id,
      });
    } else {
      const mathExpression = value.counting + e.target.id;
      setValue({
        counting: mathExpression,
        result: eval(mathExpression),
      });
    }
  };

  const handelClickMathOperator = (e) => {
    const lastElement = value.counting.slice(-1);
    const isMathOperator =
      lastElement === '/' ||
      lastElement === '*' ||
      lastElement === '-' ||
      lastElement === '+' ||
      false;
    isMathOperator
      ? setValue({
          ...value,
          counting: value.counting.slice(0, -1) + e.target.id,
        })
      : setValue({
          ...value,
          counting: value.counting + e.target.id,
        });
  };

  const handelClickButtonDelete = (e) => {
    if (e.target.id === 'btn-delete') {
      setValue({
        counting: '0',
        result: '0',
      });
      setHistory([]);
      return;
    }

    if (value.counting === '0') return;
    const isStingLengthShort = value.counting.length <= 1;
    if (isStingLengthShort) {
      setValue({
        counting: '0',
        result: '0',
      });
      return;
    }
    const mathExpression = value.counting.slice(0, -1);
    const isMathOperator =
      mathExpression.slice(-1) === '/' ||
      mathExpression.slice(-1) === '*' ||
      mathExpression.slice(-1) === '-' ||
      mathExpression.slice(-1) === '+' ||
      false;

    const result = isMathOperator ? eval(mathExpression.slice(0, -1)) : eval(mathExpression);
    setValue({
      counting: mathExpression,
      result: result,
    });
  };

  const handelClickButtonEqual = (e) => {
    setHistory(history.concat({ ...value, page: 'calculator' }));
  };

  return (
    <Grid templateColumns="repeat(4, 1fr)" templateRows="2fr .2fr .5fr 2fr" minH={500} gap={2}>
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={5}>
        <ExpressionView
          expressionUp={value.counting}
          expressionDown={value.result}
        ></ExpressionView>
      </GridItem>

      <GridItem rowStart={3} rowEnd={3} colStart={1} colEnd={5} gap={2}>
        <SimpleGrid columns={4} spacing={2}>
          <GroupButtonsMathOperator onClick={handelClickMathOperator}></GroupButtonsMathOperator>
        </SimpleGrid>
      </GridItem>

      <GridItem rowStart={4} rowEnd={5} colStart={4} colEnd={4}>
        <Flex direction="column" gap={2}>
          <GroupButtonsDelete onClick={handelClickButtonDelete}></GroupButtonsDelete>
          <ButtonEqual onClick={handelClickButtonEqual}></ButtonEqual>
        </Flex>
      </GridItem>

      <GridItem rowStart={4} rowEnd={4} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} spacing={2}>
          <GoupButtonsNumbers onClick={handelClickButtonNumber}></GoupButtonsNumbers>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}
