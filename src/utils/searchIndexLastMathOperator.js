export const searchIndexLastMathOperator = (string) => {
  const regexp = /([-+/*])(?=[^-+/*]*$)/;
  return string.search(regexp);
};
