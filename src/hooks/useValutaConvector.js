import { useState } from 'react';
import { parceCourseValuta } from '../utils/parceCourseValuta';

export const useValutaConvector = () => {
  const [courseUsd, setCourseUsd] = useState(0.0116);
  const [courseEuro, setCourseEuro] = useState(0.0107);

  const setCourseValuta = () => {
    const getCourseValuta = (value) => {
      return parceCourseValuta(value).then();
    };

    const dataCourseUsd = getCourseValuta('USD');
    const dataCourseEuro = getCourseValuta('EUR');

    Promise.all([dataCourseUsd, dataCourseEuro]).then(
      ([resulltUsd, resultEuro]) => {
        if (resulltUsd) setCourseUsd(resulltUsd);
        if (resultEuro) setCourseEuro(resultEuro);
      },
    );
  };

  return { courseUsd, courseEuro, setCourseValuta };
};
