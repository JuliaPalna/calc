import { ButtonApp } from '../ButtonApp';
import { IconEqual } from '../icon';

export const ButtonEqual = ({ onClick }) => {
  const buttonEqual = {
    id: 'btn-equal',
    value: <IconEqual />,
  };
  return (
    <ButtonApp key={buttonEqual.id} onClick={onClick} id={buttonEqual.id}>
      {buttonEqual.value}
    </ButtonApp>
  );
};
