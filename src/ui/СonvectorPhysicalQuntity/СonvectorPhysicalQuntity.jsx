import { Heading, Flex } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { ButtonApp } from '../ButtonApp';
import { usePhysicalQuntityContext } from '../../context/physicalQuantityContext';

import { WorTableConvector } from '../WorkTableConvector';
import { DateCalculate } from '../DateCalculate';
import { DiscountCalculate } from '../DiscountCalculate';

export const СonvectorPhysicalQuntity = ({ onClick }) => {
  const { physicalQuntity } = usePhysicalQuntityContext();

  let el;

  if (physicalQuntity.name === 'Дата') {
    el = <DateCalculate array={physicalQuntity.value} />;
  } else if (physicalQuntity.name === 'Скидка') {
    el = <DiscountCalculate array={physicalQuntity.value} />;
  } else {
    el = <WorTableConvector array={physicalQuntity.value} />;
  }

  return (
    <Flex flexDir={'column'} gap={5}>
      <Flex gap={2}>
        <ButtonApp onClick={onClick}>
          <ArrowLeftIcon />
        </ButtonApp>

        <Heading>{physicalQuntity.name}</Heading>
      </Flex>

      {el}
    </Flex>
  );
};
