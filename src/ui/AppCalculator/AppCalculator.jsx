import { Box, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { MenuPage } from '../../pages/MenuPage';

export const AppCalculator = () => {
  return (
    <Container
      mt="10"
      mb="15"
      position="relative"
      maxH="900px"
      h="85vh"
      minh={'100vh'}
    >
      <Box position="absolute" top={3} right={8} zIndex={1}>
        <ColorModeSwitcher />
      </Box>
      <MenuPage />
    </Container>
  );
};
