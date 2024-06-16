import { Grid, GridItem } from '@chakra-ui/react';

import { VALUTA } from '../../globals/valuta';

import { useCalculator } from '../../hooks/useCalculator';
// import { useValuta } from '../../hooks/useValuta';

import { GroupButtonsDelete } from '../../ui/GroupButtonsDelete';
import { GridButtonsNumbers } from '../../ui/GridButtonNumbers/GridButtonNumbers';
import { GoupButtonsNumbers } from '../../ui/GroupButtonsNumbers';
import { ButtonPoint } from '../../ui/ButtonPoint';
import { GridGroupButtonsDelete } from '../../ui/GridGroupButtonsDelete/GridGroupButtonsDelete';
import { SelectUnit } from '../../ui/SelectUnit';

export function ValutaPage() {
  const [value, result, setValue] = useCalculator();

  const handelChange = (e) => e.target;

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows=".5fr 2fr  .2fr 2fr"
      minH={500}
      maxH={500}
      gap={2}
    >
      <GridItem colStart={1} colEnd={5} rowStart={1} rowEnd={3}>
        <SelectUnit array={VALUTA} onChange={handelChange} value={value} />
        <SelectUnit array={VALUTA} onChange={handelChange} value={result} />
        {/* <SelectUnit array={VALUTA} onChange={handelChange} value={result} /> */}
      </GridItem>

      <GridGroupButtonsDelete>
        <GroupButtonsDelete onClick={setValue} />
      </GridGroupButtonsDelete>

      <GridButtonsNumbers>
        <GoupButtonsNumbers onClick={setValue} />
        <ButtonPoint onClick={setValue} />
      </GridButtonsNumbers>
    </Grid>
  );
}
