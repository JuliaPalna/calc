import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    // p: '20px 15px 10px',
  },
  tablist: {
    borderBottom: '3px solid',
  },
  tabpanel: {},
});

const colorfulVariant = definePartsStyle((props) => {
  return {
    tab: {
      color: mode(`#22222c`, `#e2e3e9`)(props),
      bg: mode(`#f1f1f1`, `#292a34`)(props),

      _hover: {
        mb: '-3px',
        bg: mode('#30323f55', '#41465a')(props),
      },

      _selected: {
        mb: '-3px',
        color: mode('#22222c', '#e2e3e9')(props),
        bg: mode('#e2e3e9', '#1d1e25')(props),
      },
    },

    tablist: {
      borderBottomColor: mode('#f1f1f1', '#292a34')(props),
      bg: mode(`#f1f1f1`, `#292a34`)(props),
    },

    tabpanel: {
      bg: mode(`#e2e3e9`, `#1d1e25`)(props),
    },
  };
});

const variants = {
  colorful: colorfulVariant,
};

const defaultProps = {
  // size: 'xl',
  variant: 'colorful',
};

export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps,
});
