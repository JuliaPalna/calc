import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
  },
});

const variantCustom = definePartsStyle(() => {
  return {
    field: {
      bg: '#ff',
      border: '0px solid',
      _dark: {
        bg: '#30323f',
      },

      _hover: {
        bg: '#ff',
        _dark: {
          bg: '#30323f',
        },
      },
      _focusVisible: {
        bg: '#ff',
        _dark: {
          bg: '#30323f',
        },
      },
    },
    addon: {
      border: '0px solid',
      borderColor: 'transparent',
      bg: `inherit`,
      // color: 'white',
      _dark: {
        // bg: `black`,
        color: `#e2e3e9`,
      },
    },
    element: {
      bg: 'white',
      rounded: 'full',
      border: '1px solid',
      borderColor: 'gray.100',
      _dark: {
        bg: 'whiteAlpha.50',
        borderColor: 'whiteAlpha.100',
      },
    },
  };
});

const variants = {
  custom: variantCustom,
};

const size = {
  md: defineStyle({
    fontSize: 'sm',
    px: '4',
    h: '10',
    borderRadius: '5px',
  }),
};

const sizes = {
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'custom',
  },
});
