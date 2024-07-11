import { useRef, useState } from 'react';

import { useUnitMeasure } from './useUnitMeasure';
import { useCalculator } from './useCalculator';

import { convertUnit } from '../utils/convertUnit';

export const useConvector = (array) => {
  const { expression, calculateExpression } = useCalculator();

  const selectFirstRef = useRef(null);
  const selectSecondRef = useRef(null);

  const [unitMeasureFirst, setUnitMeasureFirst] = useUnitMeasure(1);
  const [unitMeasureSecond, setUnitMeasureSecond] = useUnitMeasure(1);

  const [nameOKEI1, setNameOKEI1] = useState(array[0].nameOKEI);
  const [nameOKEI2, setNameOKEI2] = useState(array[0].nameOKEI);

  const changeOption = ({ ref, fnOKEI, fnUnit }) => {
    fnOKEI(ref.current.selectedOptions[0].attributes['data-name'].value);
    fnUnit(ref.current.selectedOptions[0].attributes['data-measure'].value);
  };

  const changeOptionFirst = () => {
    changeOption({
      ref: selectFirstRef,
      fnOKEI: setNameOKEI1,
      fnUnit: setUnitMeasureFirst,
    });
  };

  const changeOptionSecond = () => {
    changeOption({
      ref: selectSecondRef,
      fnOKEI: setNameOKEI2,
      fnUnit: setUnitMeasureSecond,
    });
  };

  const result = convertUnit({
    number: expression,
    unitMeasureFirst,
    unitMeasureSecond,
  });

  const convector = {
    expression,
    calculateExpression,
    result,
  };

  const selectFirst = {
    ref: selectFirstRef,
    OKEI: nameOKEI1,
    fn: changeOptionFirst,
  };

  const selectSecond = {
    ref: selectSecondRef,
    OKEI: nameOKEI2,
    fn: changeOptionSecond,
  };

  return {
    convector,
    selectFirst,
    selectSecond,
  };
};
