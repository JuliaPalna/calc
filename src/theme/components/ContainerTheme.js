import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  sm: defineStyle({
    maxW: '45ch',
    p: '4',
  }),
  md: defineStyle({
    maxW: 'container.sm',
    p: '6',
    fontSize: 'lg',
  }),
  lg: defineStyle({
    maxW: '75ch',
    p: '8',
    fontSize: 'xl',
  }),
};

const defaultProps = {
  size: 'md',
  variant: 'colorful',
  colorScheme: 'brand',
};

export const containerTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
