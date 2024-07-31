import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { ButtonCalc } from '../ButtonCalc';
import {
  buttonBackspace,
  buttonDelete,
  buttonPoint,
} from '../ButtonCalc/buttons';
import { GoupButtonsNumbers } from '../GroupButtonsNumbers';

export const ButtonsGroupCalcAreaMin = ({ onClick }) => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="1fr 1fr"
      gap={2}
      position={'relative'}
      onClick={onClick}
    >
      <GridItem rowStart={1} rowEnd={3} colStart={4} colEnd={4}>
        <Flex flexDirection={'column'} h={'100%'} gap={2}>
          <ButtonCalc buttonCalc={buttonBackspace} grow={1} />
          <ButtonCalc buttonCalc={buttonDelete} grow={1} />
        </Flex>
      </GridItem>

      <GridItem rowStart={1} rowEnd={4} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} gap={2}>
          <GoupButtonsNumbers />
          <ButtonCalc buttonCalc={buttonPoint} />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
