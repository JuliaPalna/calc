import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontSize: "1em",
    borderRadius: 'base'
  },
  // Стили для вариаций размера
  sizes: {

  },
  // Стили для вариантов визуального стиля
  variants: {
    number: {
      border: '2px solid',
      bg: 'red',
      borderColor: 'red'
    },
    delete: {
      bg: 'gray.50'
    },
    equal: {
      backgroundColor: 'colorb.button.equal'
    },
    operator: {
      backgroundColor: 'colorb.button.equal'
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'sm',
  },
})


export default Button
