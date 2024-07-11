import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { ButtonCalc } from '../ButtonCalc';
import {
  buttonBackspace,
  buttonDelete,
  buttonEqual,
  buttonPercent,
  buttonPoint,
} from '../ButtonCalc/buttons';
import { GroupButtonsMathOperator } from '../GroupButtonsMathOperator';
import { GoupButtonsNumbers } from '../GroupButtonsNumbers';

export const ButtonsGroupCalcArea = ({ onClick }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" templateRows="0.5fr 1fr 1fr" gap={2}>
      <GridItem rowStart={1} rowEnd={1} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} spacing={2}>
          <ButtonCalc buttonCalc={buttonDelete} onClick={onClick} />
          <ButtonCalc buttonCalc={buttonBackspace} onClick={onClick} />
          <ButtonCalc buttonCalc={buttonPercent} onClick={onClick} />
        </SimpleGrid>
      </GridItem>

      <GridItem rowStart={1} rowEnd={4} colStart={4} colEnd={4}>
        <SimpleGrid columns={1} spacing={2}>
          <GroupButtonsMathOperator onClick={onClick} />
          <ButtonCalc buttonCalc={buttonEqual} onClick={onClick} />
        </SimpleGrid>
      </GridItem>

      <GridItem rowStart={2} rowEnd={4} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} spacing={2}>
          <GoupButtonsNumbers onClick={onClick} />
          <ButtonCalc buttonCalc={buttonPoint} onClick={onClick} />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
