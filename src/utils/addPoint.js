import { getPartStringEnd, getLastElement } from './functionString';
import { isInclude, isNotFound } from './isFunction';
import { isMathOperator } from './isFunction';
import { searchIndexLastMathOperator } from './searchIndexLastMathOperator';

export const addPoint = (expression) => {
  let newExpression;

  if (isMathOperator(getLastElement(expression))) {
    newExpression = expression + '0.';
    return newExpression;
  }

  const index = searchIndexLastMathOperator(expression);
  const isIncludeMathOperator = !isNotFound(index);

  if (isIncludeMathOperator) {
    const stringEnd = getPartStringEnd(expression, index + 1);
    const isIncludePointStringEnd = isInclude(stringEnd, '.');

    newExpression = isIncludePointStringEnd ? expression : expression + '.';
  } else {
    const isIncludePoint = isInclude(expression, '.');

    newExpression = isIncludePoint ? expression : expression + '.';
  }

  return newExpression;
};
