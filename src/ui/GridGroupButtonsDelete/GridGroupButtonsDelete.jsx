import { Flex, GridItem } from '@chakra-ui/react';

export const GridGroupButtonsDelete = ({ children }) => {
  return (
    <GridItem rowStart={4} rowEnd={4} colStart={4} colEnd={4}>
      <Flex flexDir={'column'} columns={1} gap={2}>
        {children}
      </Flex>
    </GridItem>
  );
};
