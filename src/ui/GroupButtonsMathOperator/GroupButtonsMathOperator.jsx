import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
import { ButtonApp } from '../button';

export function GroupButtonsMathOperator({ onClick }) {
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
      <ButtonApp key={button.id} onClick={onClick} id={button.id}>
        {button.value}
      </ButtonApp>
    );
  });
}
