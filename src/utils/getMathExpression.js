import { isZero, isNumber } from '../utils/isFunction';
import { addMathOperator } from '../utils/addMathOperator';
import { backspaceElement } from '../utils/backspaceElement';
import { addPercent } from '../utils/addPercent';
import { addNumber } from '../utils/addNumber';
import { addPoint } from '../utils/addPoint';
import { isMathOperator } from './isMathOperator';
import { deleteLastElement, getLastElement } from './functionString';

export const getMathExpression = (expression, element) => {
  let newExpression = expression;

  if (isNumber(element)) {
    newExpression = addNumber(expression, element);
  } else if (isMathOperator(element)) {
    newExpression = addMathOperator(expression, element);
  } else if (element === 'btn-point') {
    newExpression = addPoint(expression);
  } else if (element === 'btn-delete') {
    newExpression = '0';
  } else if (element === 'btn-backspace') {
    if (isZero(expression)) return;
    newExpression = backspaceElement(expression);
  } else if (element === 'btn-percent') {
    if (isZero(expression)) return;
    newExpression = addPercent(expression);
  } else if (element === 'btn-equal') {
    newExpression = isMathOperator(getLastElement(expression))
      ? deleteLastElement(expression)
      : expression;
  }

  return newExpression;
};
