import { ButtonApp } from '../ButtonApp';
import { IconBackspace } from '../icon';

export const GroupButtonsDelete = ({ onClick }) => {
  const arrayButtonsDelete = [
    {
      id: 'btn-delete',
      value: 'AC',
    },
    {
      id: 'btn-backspace',
      value: <IconBackspace />,
    },
  ];

  return arrayButtonsDelete.map((button) => {
    return (
      <ButtonApp key={button.id} onClick={onClick} id={button.id} flexGrow={1}>
        {button.value}
      </ButtonApp>
    );
  });
};
