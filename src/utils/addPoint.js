import { getPartStringEnd, getLastElement } from './functionString';
import { isInclude, isNotFound } from './isFunction';
import { isMathOperator } from './isMathOperator';
import { searchIndexLastMathOperator } from './searchIndexLastMathOperator';

export const addPoint = (expression) => {
  if (isMathOperator(getLastElement(expression))) {
    return expression + '0.';
  }

  const index = searchIndexLastMathOperator(expression);
  const isIncludeMathOperator = !isNotFound(index);

  if (isIncludeMathOperator) {
    const stringEnd = getPartStringEnd(expression, index + 1);
    const isIncludePoint = isInclude(stringEnd, '.');

    return isIncludePoint ? expression : expression + '.';
  } else {
    const isIncludePointExpression = isInclude(expression, '.');

    return isIncludePointExpression ? expression : expression + '.';
  }
};
