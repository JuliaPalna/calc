import { Button } from '@chakra-ui/react';

export const ButtonCalc = ({ buttonCalc, grow }) => {
  return (
    <Button
      key={buttonCalc.id}
      id={buttonCalc.id}
      variant={buttonCalc.variant}
      flexGrow={grow}
    >
      {buttonCalc.value}
    </Button>
  );
};
