import React from 'react';
import { Box, Button, Flex, Grid, Heading } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { LISTUNIT } from '../../globals/modeConvextor';
import { ARRAYUNITS } from '../../globals/arrayUnits';

import { usePhysicalQuntityContext } from '../../context/physicalQuantityContext';

import { ListButtons } from '../../ui/ListButtons';
import { DesktopViewСonvector } from '../../ui/DesktopViewСonvector';

import { useConvectorMode } from '../../hooks/useConvectorMode';
import { arrayFilter } from '../../utils/arrayFilter';

export const ConvectorPage = () => {
  const { physicalQuntity, setPhysicalQuntity } = usePhysicalQuntityContext();
  const [convectorMode, setConvectorMode] = useConvectorMode();

  const nahdelClickButtonUnit = (e) => {
    const unit = arrayFilter(e);

    setConvectorMode();
    setPhysicalQuntity(unit);
  };

  const listButtons = (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={1}
    >
      <ListButtons array={ARRAYUNITS} onClick={nahdelClickButtonUnit} />
    </Grid>
  );

  const convectorPhysicalQuntity = (
    <Flex flexDir={'column'} gap={2} h="100%">
      <Box>
        <Flex gap={10} w="50%">
          <Button onClick={setConvectorMode}>
            <ArrowLeftIcon />
          </Button>

          <Heading>{physicalQuntity.name}</Heading>
        </Flex>
      </Box>

      <DesktopViewСonvector />
    </Flex>
  );

  const application =
    convectorMode === LISTUNIT ? listButtons : convectorPhysicalQuntity;

  return application;
};
