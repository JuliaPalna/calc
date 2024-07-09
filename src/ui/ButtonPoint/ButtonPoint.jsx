import { ButtonApp } from '../ButtonApp';

export const ButtonPoint = ({ onClick }) => {
  const buttonPoint = {
    id: 'btn-point',
    value: '.',
  };
  return (
    <ButtonApp key={buttonPoint.id} onClick={onClick} id={buttonPoint.id}>
      {buttonPoint.value}
    </ButtonApp>
  );
};
