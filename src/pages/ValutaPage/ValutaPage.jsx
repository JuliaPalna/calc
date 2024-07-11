import { useValutaConvector } from '../../hooks/useValutaConvector';
import { DesktopViewCustomConv } from '../../ui/DesktopViewCustomConv';

export const ValutaPage = () => {
  // const { measureUsd, measureEuro, setCourseValuta } = useValutaConvector();

  const VALUTA = [
    {
      name: 'usd',
      measure: '1',
      nameOKEI: 'Доллар США',
      shortnameOKEI: 'USD',
    },
    {
      name: 'ruble',
      measure: '100',
      nameOKEI: 'Рубль',
      shortnameOKEI: 'RU',
    },
    {
      name: 'eur',
      measure: '.93',
      nameOKEI: 'Евро',
      shortnameOKEI: 'EUR',
    },
  ];

  return <DesktopViewCustomConv array={VALUTA} />;
};
