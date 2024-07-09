export const isMathOperator = (value) => {
  return (
    value === '/' || value === '*' || value === '-' || value === '+' || false
  );
};
