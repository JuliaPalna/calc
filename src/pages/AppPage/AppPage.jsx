import { Box, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Menu } from './Menu';

export const AppPage = () => {
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

      <Menu />
    </Container>
  );
};
