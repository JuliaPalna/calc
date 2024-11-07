import { useState } from 'react';

import {
  deleteLastElement,
  getLastElement,
  getValueStringExpression,
} from '../utils/functionString';
import { getButtonId } from '../utils/mathFunction';
import { getMathExpression } from '../utils/getMathExpression';
import { isMathOperator, isPoint } from '../utils/isFunction';

export const useCalculator = () => {
  const [expression, setExpression] = useState('0');
  const [resultCalc, setResultCalc] = useState(0);

  const calculateExpression = (e) => {
    const elementId = getButtonId(e);
    const newExpression = getMathExpression(expression, elementId);
    const lastElement = getLastElement(newExpression);

    const resultСalculation =
      isMathOperator(lastElement) || isPoint(lastElement)
        ? deleteLastElement(newExpression)
        : newExpression;

    setExpression(newExpression);
    setResultCalc(getValueStringExpression(resultСalculation));
  };

  return { expression, resultCalc, calculateExpression };
};
