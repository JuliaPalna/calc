import { Heading, Grid, GridItem } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { useUnit } from '../../context/unitContext';

import { useCalculator } from '../../hooks/useCalculator';
import { useConvector } from '../../hooks/useConvector';

import { GoupButtonsNumbers } from '../GroupButtonsNumbers';
import { GroupButtonsDelete } from '../GroupButtonsDelete';
import { ButtonApp } from '../ButtonApp';
import { ButtonPoint } from '../ButtonPoint';
import { SelectUnit } from '../SelectUnit';
import { GridButtonsNumbers } from '../GridButtonNumbers/GridButtonNumbers';
import { GridGroupButtonsDelete } from '../GridGroupButtonsDelete/GridGroupButtonsDelete';

const handelChange = (e) => e.target;

export function СonvectorUnit({ onClick }) {
  const [value, result, setValue] = useCalculator();
  const { unit } = useUnit();

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
        <Heading>{unit.name}</Heading>
      </GridItem>

      <GridItem colStart={1} colEnd={5}>
        <SelectUnit array={unit.value} onChange={handelChange} value={value} />
        <SelectUnit array={unit.value} onChange={handelChange} value={result} />
      </GridItem>

      <GridButtonsNumbers>
        <GoupButtonsNumbers onClick={setValue} />
        <ButtonPoint onClick={setValue} />
      </GridButtonsNumbers>

      <GridGroupButtonsDelete>
        <GroupButtonsDelete onClick={setValue} />
      </GridGroupButtonsDelete>
    </Grid>
  );
}
