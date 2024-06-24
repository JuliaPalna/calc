import { useUnitMeasure } from './useUnitMeasure';
import { useCalculator } from './useCalculator';

import { convertUnit } from '../utils/convertUnit';
import { useRef } from 'react';

export const useConvector = () => {
  const { expression, calculateExpression } = useCalculator();

  const selectFirstRef = useRef(null);
  const selectSecondRef = useRef(null);

  const [unitMeasureFirst, setUnitMeasureFirst] = useUnitMeasure(1);
  const [unitMeasureSecond, setUnitMeasureSecond] = useUnitMeasure(1);

  const resultConv = convertUnit({
    number: expression,
    unitMeasureFirst,
    unitMeasureSecond,
  });

  return {
    expression,
    calculateExpression,
    selectFirstRef,
    selectSecondRef,
    resultConv,
    setUnitMeasureFirst,
    setUnitMeasureSecond,
  };
};
