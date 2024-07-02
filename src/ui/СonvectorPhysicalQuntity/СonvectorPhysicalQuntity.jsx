import { Heading, Grid, GridItem, Flex } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { ButtonApp } from '../ButtonApp';
import { usePhysicalQuntityContext } from '../../context/physicalQuantityContext';
import { WorTableConvector } from '../WorkTableConvector';

export function СonvectorPhysicalQuntity({ onClick }) {
  const { physicalQuntity } = usePhysicalQuntityContext();

  return (
    <Flex flexDir={'column'} gap={5}>
      <Flex gap={2}>
        <ButtonApp onClick={onClick}>
          <ArrowLeftIcon />
        </ButtonApp>

        <Heading>{physicalQuntity.name}</Heading>
      </Flex>

      <WorTableConvector array={physicalQuntity.value} />
    </Flex>
  );
}
