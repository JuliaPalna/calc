import { getPartStringEnd, getPartStringStart } from './functionString';
import { isLastElement, isNotFound } from './isFunction';
import { calculatePercent } from './mathFunction';
import { searchIndexLastMathOperator } from './searchIndexLastMathOperator';

export const addPercent = (expression) => {
  let newExpression = expression;

  const indexMathOperator = searchIndexLastMathOperator(expression);

  if (isNotFound(indexMathOperator)) {
    newExpression = calculatePercent(expression).toString();
  } else if (isLastElement(expression, indexMathOperator)) {
    newExpression = expression;
  } else {
    const number = getPartStringEnd(newExpression, indexMathOperator + 1);
    newExpression =
      getPartStringStart(newExpression, indexMathOperator + 1) +
      calculatePercent(number);
  }

  return newExpression;
};
