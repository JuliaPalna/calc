import { useState } from 'react';

import { getElementID } from '../utils/mathFunction';
import {
  deleteLastElement,
  getLastElement,
  getValueStringExpression,
} from '../utils/functionString';
import { getMathExpression } from '../utils/getMathExpression';
import { isMathOperator } from '../utils/isMathOperator';
import { isPoint } from '../utils/isFunction';

export const useCalculator = () => {
  const [mathExpression, setMathExpression] = useState('0');
  const [result, setResult] = useState(0);

  const setExpression = (e) => {
    const element = getElementID(e);
    const newExpression = getMathExpression(mathExpression, element);
    const lastElement = getLastElement(newExpression);

    const resultСalculation =
      isMathOperator(lastElement) || isPoint(lastElement)
        ? deleteLastElement(newExpression)
        : newExpression;

    setMathExpression(newExpression);
    setResult(getValueStringExpression(resultСalculation));
  };

  return [mathExpression, result, setExpression];
};
