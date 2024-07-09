import { Button } from '@chakra-ui/react';

export const ButtonApp = ({ id, variant, onClick, children }) => {
  return (
    <Button variant={variant} onClick={onClick} id={id}>
      {children}
    </Button>
  );
};
