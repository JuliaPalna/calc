import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    fontSize: "1em",
    borderRadius: 'base',
  },
  // Стили для вариаций размера
  sizes: {
    xl: {
      h: '48px',
      w: "74px",
      fontSize: 'lg',
      px: '30px',
    },
  },
  // Стили для вариантов визуального стиля
  variants: {
    'outline': {
      outline: "2px solid #116566"
    },
    'listbtn': {
      w:"80px",
      h:"80px",
      fontWeight: 'normal',
      fontSize: ".7em",
      flexGrow: "1",
      bg: "#d1e8e2",
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'sm',
  },
})

export default Button
