import { Button } from '@chakra-ui/react';

export const GoupButtonsNumbers = () => {
  const buttonsNumbers = Array.from(
    Array(10)
      .keys()
      .map((number) => {
        return (
          <Button key={number} id={number} variant={'number'}>
            {number}
          </Button>
        );
      }),
  );
  return buttonsNumbers;
};
