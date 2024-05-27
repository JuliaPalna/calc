import { Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import { Desctop } from '../Desctop';
import { GoupButtonsNumbers } from '../GroupButtonsNumbers';
import { GroupButtonsMathOperator } from '../GroupButtonsMathOperator';
import { ButtonDelete } from '../ButtonDelete';
import { ButtonEqual } from '../ButtonEqual';
import { useState } from 'react';

export function Calculator(props) {
  const [value, setValue] = useState(0);

  const handelClickButtonNumber = (e) => {
    if (value !== 0) setValue(value + e.target.innerHTML);
    else setValue(e.target.innerHTML);
  };
  const handelClickMathOperator = (e) => {
    console.log(e.target);
  };
  const handelClickButtonDelete = (e) => {
    if (value.length <= 1) setValue(0);
    if (value.length > 1) {
      setValue(value.slice(0, -1));
    }
  };
  const handelClickButtonEqual = (e) => {
    console.log('=');
  };

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="2fr .2fr .5fr 2fr"
      outline="1px solid red"
      minH={500}
    >
      <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={5} outline="1px solid red">
        <Desctop outline="2px solid blue">
          <Text>{value}</Text>
        </Desctop>
      </GridItem>

      <GridItem rowStart={3} rowEnd={3} colStart={1} colEnd={5} outline="1px solid red">
        <GroupButtonsMathOperator onClick={handelClickMathOperator}></GroupButtonsMathOperator>
      </GridItem>

      <GridItem rowStart={4} rowEnd={5} colStart={4} colEnd={4} outline="1px solid red">
        <Flex direction="column">
          <ButtonDelete onClick={handelClickButtonDelete}></ButtonDelete>
          <ButtonEqual onClick={handelClickButtonEqual}></ButtonEqual>
        </Flex>
      </GridItem>

      <GridItem rowStart={4} rowEnd={4} colStart={1} colEnd={4} outline="1px solid red">
        <GoupButtonsNumbers onClick={handelClickButtonNumber}></GoupButtonsNumbers>
      </GridItem>
    </Grid>
  );
}
