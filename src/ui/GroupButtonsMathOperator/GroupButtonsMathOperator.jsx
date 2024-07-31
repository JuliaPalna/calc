import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

export const GroupButtonsMathOperator = () => {
  const arrayButtonsCount = [
    {
      id: '+',
      value: <AddIcon />,
    },
    {
      id: '-',
      value: <MinusIcon />,
    },
    {
      id: '*',
      value: <CloseIcon />,
    },
    {
      id: '/',
      value: <MinusIcon />,
    },
  ];

  return arrayButtonsCount.map((button) => {
    return (
      <Button key={button.id} id={button.id} variant={'operator'}>
        {button.value}
      </Button>
    );
  });
};
