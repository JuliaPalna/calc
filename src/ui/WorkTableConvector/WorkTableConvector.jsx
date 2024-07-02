import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';

import { useConvector } from '../../hooks/useConvector';

import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { ButtonPoint } from '../../ui/ButtonPoint';
import { SelectUnit } from '../../ui/SelectUnit';

export function WorTableConvector({ array }) {
  const {
    convector,
    selectFirstRef,
    selectSecondRef,
    setUnitMeasureFirst,
    setUnitMeasureSecond,
  } = useConvector();

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="1fr 1fr"
      minH={500}
      maxH={500}
      gap={2}
    >
      <GridItem colStart={1} colEnd={5} rowStart={1} rowEnd={1}>
        <SelectUnit
          refSelect={selectFirstRef}
          array={array}
          onChange={setUnitMeasureFirst}
          value={convector.expression}
        />
        <SelectUnit
          refSelect={selectSecondRef}
          array={array}
          onChange={setUnitMeasureSecond}
          value={convector.resultConv}
        />
      </GridItem>

      <Flex flexDir={'column'} columns={1} gap={2}>
        <GroupButtonsDelete onClick={convector.calculateExpression} />
      </Flex>

      <GridItem rowStart={2} rowEnd={2} colStart={1} colEnd={4}>
        <SimpleGrid columns={3} spacing={2}>
          <GoupButtonsNumbers onClick={convector.calculateExpression} />
          <ButtonPoint onClick={convector.calculateExpression} />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}
