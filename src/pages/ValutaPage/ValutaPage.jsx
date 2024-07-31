import { useEffect } from 'react';
import { useValutaConvector } from '../../hooks/useValutaConvector';
import { DesktopViewCustomConv } from '../../ui/DesktopViewCustomConv';

export const ValutaPage = () => {
  const { courseUsd, courseEuro, setCourseValuta } = useValutaConvector();

  useEffect(() => {
    setCourseValuta();
  }, [courseUsd, courseEuro]);

  const VALUTA = [
    {
      name: 'usd',
      measure: +courseUsd,
      nameOKEI: 'Доллар США',
      shortnameOKEI: 'USD',
    },
    {
      name: 'ruble',
      measure: '1',
      nameOKEI: 'Рубль',
      shortnameOKEI: 'RU',
    },
    {
      name: 'eur',
      measure: +courseEuro,
      nameOKEI: 'Евро',
      shortnameOKEI: 'EUR',
    },
  ];

  return <DesktopViewCustomConv array={VALUTA} />;
};
