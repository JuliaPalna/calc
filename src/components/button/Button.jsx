import { Button } from '@chakra-ui/react';

export function ButtonApp({ variant, key, onClick, children }) {
  return (
    <Button variant={variant} key={`btn${key}`} onClick={onClick}>
      {children}
    </Button>
  );
}
