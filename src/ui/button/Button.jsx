import { Button } from '@chakra-ui/react';

export function ButtonApp({ id, variant, key, onClick, children }) {
  return (
    <Button variant={variant} key={`btn${key}`} onClick={onClick} id={id}>
      {children}
    </Button>
  );
}
