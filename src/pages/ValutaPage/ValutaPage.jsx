import { Grid, GridItem } from '@chakra-ui/react';

import { VALUTA } from '../../globals/valuta';

import { useConvector } from '../../hooks/useConvector';

import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { GridButtonsNumbers } from '../../ui/GridButtonNumbers/GridButtonNumbers';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { ButtonPoint } from '../../ui/ButtonPoint';
import { GridGroupButtonsDelete } from '../../ui/GridGroupButtonsDelete/GridGroupButtonsDelete';
import { SelectUnit } from '../../ui/SelectUnit';

export function ValutaPage() {
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
      maxH={500}
      gap={2}
    >
      <GridItem colStart={1} colEnd={5} rowStart={1} rowEnd={3}>
        <SelectUnit
          refSelect={selectFirstRef}
          array={VALUTA}
          onChange={setUnitMeasureFirst}
          value={expression}
        />
        <SelectUnit
          refSelect={selectSecondRef}
          array={VALUTA}
          onChange={setUnitMeasureSecond}
          value={resultConv}
        />
        {/* <SelectUnit array={VALUTA} onChange={handelChange} value={result} /> */}
      </GridItem>

      <GridGroupButtonsDelete>
        <GroupButtonsDelete onClick={calculateExpression} />
      </GridGroupButtonsDelete>

      <GridButtonsNumbers>
        <GoupButtonsNumbers onClick={calculateExpression} />
        <ButtonPoint onClick={calculateExpression} />
      </GridButtonsNumbers>
    </Grid>
  );
}
