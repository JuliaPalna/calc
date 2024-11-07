import { deleteLastElement, getLastElement } from './functionString';
import { isPoint } from './isFunction';
import { isMathOperator } from './isFunction';

export const addMathOperator = (expession, operator) => {
  const lastElement = getLastElement(expession);

  const newExpression =
    isMathOperator(lastElement) || isPoint(lastElement)
      ? deleteLastElement(expession) + operator
      : expession + operator;

  return newExpression;
};
