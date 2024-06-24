import { Heading, Grid, GridItem } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { GoupButtonsNumbers } from '../GroupButtonsNumbers';
import { GroupButtonsDelete } from '../GroupButtonsDelete';
import { ButtonApp } from '../ButtonApp';
import { ButtonPoint } from '../ButtonPoint';
import { SelectUnit } from '../SelectUnit';
import { GridButtonsNumbers } from '../GridButtonNumbers/GridButtonNumbers';
import { GridGroupButtonsDelete } from '../GridGroupButtonsDelete/GridGroupButtonsDelete';
import { usePhysicalQuntity } from '../../context/physicalQuantityContext';

import { useConvector } from '../../hooks/useConvector';

export function СonvectorPhysicalQuntity({ onClick }) {
  const { physicalQuntity } = usePhysicalQuntity();
  const {
    expression,
    calculateExpression,
    selectFirstRef,
    selectSecondRef,
    resultConv,
    setUnitMeasureFirst,
    setUnitMeasureSecond,
  } = useConvector();

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows=".5fr 2fr  .2fr 2fr"
      minH={500}
      gap={2}
    >
      <GridItem rowStart={1} rowEnd={1} colStart={1} colEnd={2}>
        <ButtonApp onClick={onClick}>
          <ArrowLeftIcon />
        </ButtonApp>
      </GridItem>

      <GridItem rowStart={1} rowEnd={1} colStart={2} colEnd={3}>
        <Heading>{physicalQuntity.name}</Heading>
      </GridItem>

      <GridItem colStart={1} colEnd={5}>
        <SelectUnit
          refSelect={selectFirstRef}
          array={physicalQuntity.value}
          onChange={setUnitMeasureFirst}
          value={expression}
        />
        <SelectUnit
          refSelect={selectSecondRef}
          array={physicalQuntity.value}
          onChange={setUnitMeasureSecond}
          value={resultConv}
        />
      </GridItem>

      <GridButtonsNumbers>
        <GoupButtonsNumbers onClick={calculateExpression} />
        <ButtonPoint onClick={calculateExpression} />
      </GridButtonsNumbers>

      <GridGroupButtonsDelete>
        <GroupButtonsDelete onClick={calculateExpression} />
      </GridGroupButtonsDelete>
    </Grid>
  );
}
