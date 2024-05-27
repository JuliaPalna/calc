import { ButtonApp } from '../Button';

export function GoupButtonsNumbers({ onClick }) {
  const buttonsNumbers = Array.from(
    Array(10)
      .keys()
      .map((number) => {
        return (
          <ButtonApp variant="outline" key={number} onClick={onClick}>
            {number}
          </ButtonApp>
        );
      }),
  );
  return buttonsNumbers;
}
