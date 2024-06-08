import { ButtonApp } from '../button';
import { IconBackspace } from '../icon';

export function GroupButtonsDelete({ onClick }) {
  const arrayButtonsDelete = [
    {
      id: 'btn-delete',
      value: 'AC',
    },
    {
      id: 'btn-backspace ',
      value: <IconBackspace />,
    },
  ];

  return arrayButtonsDelete.map((button) => {
    return (
      <ButtonApp key={button.id} onClick={onClick} id={button.id}>
        {button.value}
      </ButtonApp>
    );
  });
}
