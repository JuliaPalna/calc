import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  borderRadius: '5px',
  fontWeight: 'bold',
  transition: 'opacity 0.15s ease-out',

  _hover: {
    opacity: 0.7,
    _dark: {
      opacity: 0.7,
    },
  },

  _active: {
    opacity: 0.5,
    _dark: {
      opacity: 0.5,
    },
  },
});

const customVariant = defineStyle(() => {
  return {
    color: '#1d1e25',
    bg: '#fff',

    _dark: {
      bg: `#22222c`,
      color: '#e2e3e9',
    },
  };
});

const deleteVariant = defineStyle(() => {
  return {
    bg: '#60396055',

    _dark: {
      color: '#e2e3e9',
      bg: '#603960',
    },
  };
});

const equalVariant = defineStyle(() => {
  return {
    bg: '#33458455',

    _dark: {
      color: '#e2e3e9',
      bg: '#334584',
    },
  };
});

const numberVariant = defineStyle(() => {
  return {
    bg: '#fff',

    _dark: {
      bg: '#22222c',
      color: '#e2e3e9',
    },
  };
});

const operatorVariant = defineStyle(() => {
  return {
    bg: '#fff',

    _dark: {
      bg: '#41465a',
      color: '#e2e3e9',
    },
  };
});

const growVariant = defineStyle(() => {
  return {
    flexGrow: '1',
  };
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    custom: customVariant,
    delete: deleteVariant,
    equal: equalVariant,
    number: numberVariant,
    operator: operatorVariant,
    grow: growVariant,
  },
  defaultProps: {
    variant: 'custom',
  },
});
