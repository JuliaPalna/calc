import { ButtonApp } from '../Button';

export function ButtonDelete({ onClick }) {
  const arrayDelete = [
    {
      title: 'btn-AC',
      body: 'AC',
    },
  ];
  return arrayDelete.map((el) => {
    return (
      <ButtonApp variant="outline" key={el.title} onClick={onClick}>
        {el.body}
      </ButtonApp>
    );
  });
}
