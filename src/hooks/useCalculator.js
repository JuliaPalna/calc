import { useState } from 'react';
import { useHistory } from '../context/historyContext';

import { getElementID } from '../utils/mathFunction';
import {
  deleteLastElement,
  getLastElement,
  getValueStringExpression,
} from '../utils/functionString';
import { getMathExpression } from '../utils/getMathExpression';
import { addHistory } from '../utils/addHistory';
import { isMathOperator } from '../utils/isMathOperator';
import { isPoint } from '../utils/isFunction';

export const useCalculator = () => {
  const [mathExpression, setMathExpression] = useState('0');
  const [result, setResult] = useState(0);
  const { history, setHistory } = useHistory();

  const setExpression = (e) => {
    const element = getElementID(e);
    const newExpression = getMathExpression(mathExpression, element);

    if (element === 'btn-delete') {
      setHistory([]);
    } else if (element === 'btn-equal') {
      setHistory(
        addHistory({
          array: history,
          counting: newExpression,
          result: result,
          page: 'calculator',
        }),
      );
    }

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
