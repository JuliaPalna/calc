import { ButtonApp } from '../ButtonApp';
import { IconPercent } from '../icon';

export function ButtonPercent({ onClick }) {
  const buttonPercent = {
    id: 'btn-percent',
    value: <IconPercent />,
  };
  return (
    <ButtonApp key={buttonPercent.id} onClick={onClick} id={buttonPercent.id}>
      {buttonPercent.value}
    </ButtonApp>
  );
}
