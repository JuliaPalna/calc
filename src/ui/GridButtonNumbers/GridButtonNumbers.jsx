import { GridItem, SimpleGrid } from '@chakra-ui/react';

export const GridButtonsNumbers = ({ children }) => {
  return (
    <GridItem rowStart={4} rowEnd={4} colStart={1} colEnd={4}>
      <SimpleGrid columns={3} spacing={2}>
        {children}
      </SimpleGrid>
    </GridItem>
  );
};
