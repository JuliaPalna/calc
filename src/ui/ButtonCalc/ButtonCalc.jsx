import { Button } from '@chakra-ui/react';

export const ButtonCalc = ({ buttonCalc, onClick, grow }) => {
  return (
    <Button
      key={buttonCalc.id}
      id={buttonCalc.id}
      variant={buttonCalc.variant}
      onClick={onClick}
      flexGrow={grow}
    >
      {buttonCalc.value}
    </Button>
  );
};
