import { Grid, GridItem } from '@chakra-ui/react';
import { ButtonApp } from '../ButtonApp';

export const ListButtons = ({ array, onClick }) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(4, 1fr)"
      minH={500}
      maxH={500}
      gap={2}
    >
      {array.map((item) => {
        return (
          <GridItem key={item.id}>
            <ButtonApp size="xl" onClick={onClick} id={item.id}>
              {item.name}
            </ButtonApp>
          </GridItem>
        );
      })}
    </Grid>
  );
};
