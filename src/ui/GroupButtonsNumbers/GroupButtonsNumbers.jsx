import { ButtonApp } from '../ButtonApp';

export const GoupButtonsNumbers = ({ onClick }) => {
  const buttonsNumbers = Array.from(
    Array(10)
      .keys()
      .map((number) => {
        return (
          <ButtonApp key={number} onClick={onClick} id={number}>
            {number}
          </ButtonApp>
        );
      }),
  );
  return buttonsNumbers;
};
