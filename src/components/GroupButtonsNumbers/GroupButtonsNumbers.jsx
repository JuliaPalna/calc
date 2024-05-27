import ButtonApp from "../button/Button";

export default function GoupButtonsNumbers({}) {
  const numbers = Array.from(
    Array(10)
      .keys()
      .map((number) => {
        return <ButtonApp>{number}</ButtonApp>;
      })
  );
  return numbers;
}
