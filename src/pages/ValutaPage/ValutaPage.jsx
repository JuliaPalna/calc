import { useValutaConvector } from '../../hooks/useValutaConvector';
import { WorTableConvector } from '../../ui/WorkTableConvector';

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

  return <WorTableConvector array={VALUTA} />;
};
