import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const variantCustom = definePartsStyle({
  field: {
    color: '#1d1e25',
    background: '#fff',
    _dark: {
      color: '#e2e3e9',
      bg: '#22222c',
    },
  },
  icon: {
    color: '#1d1e25',
    _dark: {
      color: '#e2e3e9',
    },
  },
});

const xl = defineStyle({
  fontSize: 'lg',
  px: '2',
  h: '12',
});

const sizes = {
  xl: definePartsStyle({ field: xl }),
};
const variants = {
  custom: variantCustom,
};

export const selectTheme = defineMultiStyleConfig({
  variants,
  sizes,
  defaultProps: {
    variant: 'custom',
  },
});
