import { ButtonApp } from '../button';
import { IconEqual } from '../icon';

export function ButtonEqual({ onClick }) {
  const buttonEqual = {
    id: 'btn-equal',
    value: <IconEqual />,
  };
  return (
    <ButtonApp key={buttonEqual.id} onClick={onClick} id={buttonEqual.id}>
      {buttonEqual.value}
    </ButtonApp>
  );
}
