import { ButtonApp } from '../Button';
import { IconEqual } from '../Button/icon';

export function ButtonEqual({ onClick }) {
  const arrayEqual = [
    {
      title: 'btn-equal',
      body: <IconEqual />,
    },
  ];
  return arrayEqual.map((el) => {
    return (
      <ButtonApp variant="outline" key={el.title} onClick={onClick}>
        {el.body}
      </ButtonApp>
    );
  });
}
