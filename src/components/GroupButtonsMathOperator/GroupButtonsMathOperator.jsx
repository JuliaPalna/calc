import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
import { ButtonApp } from '../Button';

export function GroupButtonsMathOperator({ onClick }) {
  const arrayCounts = [
    {
      title: '+',
      body: <AddIcon />,
    },
    {
      title: '-',
      body: <MinusIcon />,
    },
    {
      title: '*',
      body: <CloseIcon />,
    },
    {
      title: '/',
      body: <MinusIcon />,
    },
  ];

  return arrayCounts.map((count) => {
    return (
      <ButtonApp variant="outline" key={count.title} onClick={onClick}>
        {count.body}
      </ButtonApp>
    );
  });
}
