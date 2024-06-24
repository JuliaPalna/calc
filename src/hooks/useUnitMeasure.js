import { useState } from 'react';

export const useUnitMeasure = () => {
  const [unitMeasure, setUnitMeasure] = useState(1);

  const changeSelect = (e) => setUnitMeasure(+e);

  return [unitMeasure, changeSelect];
};
