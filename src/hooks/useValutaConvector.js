import { useState } from 'react';
import { getDataParseCourseValuta } from '../utils/parcerValuta';

export const useValutaConvector = () => {
  const [measureUsd, setMeasureUsd] = useState();
  const [measureEuro, setMeasureEuro] = useState();

  function setCourseValuta() {
    function getCourseValuta(value) {
      return getDataParseCourseValuta(value).then();
    }

    const courseUsd = getCourseValuta('USD');
    const courseEuro = getCourseValuta('EUR');

    Promise.all([courseUsd, courseEuro])
      .then(([resulltUsd, resultEuro]) => {
        setMeasureUsd(resulltUsd)
        setMeasureEuro(resultEuro)
    });
  }

  return { measureUsd, measureEuro, setCourseValuta };
};
