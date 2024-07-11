import { Button } from '@chakra-ui/react';

export const GoupButtonsNumbers = ({ onClick }) => {
  const buttonsNumbers = Array.from(
    Array(10)
      .keys()
      .map((number) => {
        return (
          <Button key={number} id={number} variant={'number'} onClick={onClick}>
            {number}
          </Button>
        );
      }),
  );
  return buttonsNumbers;
};
