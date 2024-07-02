import { useRef } from 'react';

import { useUnitMeasure } from './useUnitMeasure';
import { useCalculator } from './useCalculator';

import { convertUnit } from '../utils/convertUnit';

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

  const convector = {
    expression,
    calculateExpression,
    resultConv,
  }

  return {
    convector,
    selectFirstRef,
    selectSecondRef,
    setUnitMeasureFirst,
    setUnitMeasureSecond,
  };
};
