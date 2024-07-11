import { useColorMode, useColorModeValue } from '@chakra-ui/react';

export const useColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue('dark', 'light');

  return [mode, toggleColorMode];
};
