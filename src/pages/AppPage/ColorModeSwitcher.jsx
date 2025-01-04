import React from 'react';
import { useColorModeValue, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useColorModeSwitcher } from '../../hooks/useColorModeSwitcher';

export const ColorModeSwitcher = (props) => {
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  const [mode, toggleColorMode] = useColorModeSwitcher();

  return (
    <IconButton
      size="xs"
      rounded="full"
      aria-label={`Switch to ${mode} mode`}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
