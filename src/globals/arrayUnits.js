export const ARRAYUNITS = [
  {
    id: 'DISCOUNT',
    name: 'Скидка',
    value: [
      {
        id: 'start price',
        value: 'Первоначальная цена',
      },
      {
        id: 'discount',
        value: 'Скидка(%)',
      },
    ],
  },
  {
    id: 'DATE',
    name: 'Дата',
    value: [
      {
        id: 'from',
        value: 'C',
      },
      {
        id: 'to',
        value: 'До',
      },
    ],
  },
  {
    id: 'LENGTH',
    name: 'Длина',
    value: [
      {
        id: 'meter',
        measure: 1,
        nameOKEI: 'Метр',
        shortnameOKEI: 'м',
      },
      {
        id: 'centimeter',
        measure: 0.01,
        nameOKEI: 'Сантиметр',
        shortnameOKEI: 'см',
      },
      {
        id: 'kilometer',
        measure: 1000,
        nameOKEI: 'Километр',
        shortnameOKEI: 'км',
      },
      {
        id: 'millimeter',
        measure: 0.001,
        nameOKEI: 'Милиметр',
        shortnameOKEI: 'мм',
      },
    ],
  },
  {
    id: 'SQUARE',
    name: 'Площадь',
    value: [
      {
        id: 'square meter',
        measure: '1',
        nameOKEI: 'Квадратный метр',
        shortnameOKEI: 'м²',
      },
      {
        id: 'square kilometer',
        measure: '1e6',
        nameOKEI: 'Квадратный киллометр',
        shortnameOKEI: 'км²',
      },
      {
        id: 'square centimeter',
        measure: '1e-4',
        nameOKEI: 'Квадратный сантиметр',
        shortnameOKEI: 'см²',
      },
      {
        id: 'square millimeter',
        measure: '1e-6',
        nameOKEI: 'Квадратный миллиметр',
        shortnameOKEI: 'мм²',
      },
      {
        id: 'hectare',
        measure: '1e4',
        nameOKEI: 'Гектар',
        shortnameOKEI: 'га',
      },
      {
        id: 'ar',
        measure: '1e2',
        nameOKEI: 'Ар',
        shortnameOKEI: 'а',
      },
    ],
  },
  {
    id: 'SPEED',
    name: 'Скорость',
    value: [
      {
        id: 'kilometr per second',
        measure: '1000',
        nameOKEI: 'Километр в секунду',
        shortnameOKEI: 'км/c',
      },
      {
        id: 'meter per second',
        measure: '1',
        nameOKEI: 'Метр в секунду',
        shortnameOKEI: 'м/c',
      },
      {
        id: 'kilometer per hour',
        measure: '.277777778',
        nameOKEI: 'Километр в час',
        shortnameOKEI: 'км/ч',
      },
      {
        id: 'mile per second',
        measure: '1609.34401',
        nameOKEI: 'Миля в секунду',
        shortnameOKEI: 'миль/с',
      },
      {
        id: 'mile per hour',
        measure: '.44704',
        nameOKEI: 'Миля в час',
        shortnameOKEI: 'миль/ч',
      },
      {
        id: 'foot per second',
        measure: '.3048',
        nameOKEI: 'Фут в секунду',
        shortnameOKEI: 'фут/с',
      },
      {
        id: 'foot per minute',
        measure: '.00508',
        nameOKEI: 'Фут в минуту',
        shortnameOKEI: 'фут/м',
      },
      {
        id: 'knot',
        measure: '.514',
        nameOKEI: 'Узел',
        shortnameOKEI: 'узел',
      },
      {
        id: 'Max',
        measure: '330',
        nameOKEI: 'Мах',
        shortnameOKEI: 'Ma',
      },
      {
        id: 'speed light',
        measure: '299792458',
        nameOKEI: 'Скорость света',
        shortnameOKEI: 'c',
      },
    ],
  },
  {
    id: 'TIME',
    name: 'Время',
    value: [
      {
        id: 'century',
        measure: '36525',
        nameOKEI: 'Век',
        shortnameOKEI: 'в',
      },
      {
        id: 'year',
        measure: '365',
        nameOKEI: 'Год',
        shortnameOKEI: 'г',
      },
      {
        id: 'week',
        measure: '7',
        nameOKEI: 'Неделя',
        shortnameOKEI: 'нед',
      },
      {
        id: 'day',
        measure: '1',
        nameOKEI: 'Сутки',
        shortnameOKEI: 'сут',
      },
      {
        id: 'hour',
        measure: '.0416666667',
        nameOKEI: 'Час',
        shortnameOKEI: 'ч',
      },
      {
        id: 'minute',
        measure: `${1 / 1440}`,
        nameOKEI: 'Минута',
        shortnameOKEI: 'мин',
      },
      {
        id: 'second',
        measure: `${1 / 86400}`,
        nameOKEI: 'Секунда',
        shortnameOKEI: 'c',
      },
    ],
  },
  {
    id: 'DATA',
    name: 'Данные',
    value: [
      {
        id: 'bytes',
        measure: '1',
        nameOKEI: 'Байт',
        shortnameOKEI: 'Б',
      },
      {
        id: 'kilobytes',
        measure: `${Math.pow(2, 10)}`,
        nameOKEI: 'Килобайт',
        shortnameOKEI: 'КБ',
      },
      {
        id: 'megabytes',
        measure: `${Math.pow(2, 20)}`,
        nameOKEI: 'Мегабайт',
        shortnameOKEI: 'МБ',
      },
      {
        id: 'gigabytes',
        measure: `${Math.pow(2, 30)}`,
        nameOKEI: 'Гигабайт',
        shortnameOKEI: 'ГБ',
      },
      {
        id: 'terabyte',
        measure: `${Math.pow(2, 40)}`,
        nameOKEI: 'Терабайт',
        shortnameOKEI: 'ТБ',
      },
      {
        id: 'petabyte',
        measure: `${Math.pow(2, 50)}`,
        nameOKEI: 'Петабайт',
        shortnameOKEI: 'ПБ',
      },
    ],
  },
  {
    id: 'WEIGHT',
    name: 'Вес',
    value: [
      {
        id: 'kilogram',
        measure: '1',
        nameOKEI: 'Килограмм',
        shortnameOKEI: 'кг',
      },
      {
        id: 'gram',
        measure: '.001',
        nameOKEI: 'Грамм',
        shortnameOKEI: 'г',
      },
      {
        id: 'milligrams',
        measure: '.00001',
        nameOKEI: 'Миллиграмм',
        shortnameOKEI: 'мг',
      },
      {
        id: 'micrograms',
        measure: '.0000001',
        nameOKEI: 'Микрограмм',
        shortnameOKEI: 'мкг',
      },
      {
        id: 'hundredweight',
        measure: '100',
        nameOKEI: 'Центнер',
        shortnameOKEI: 'ц',
      },
      {
        id: 'tonne',
        measure: '1000',
        nameOKEI: 'Тонна',
        shortnameOKEI: 'т',
      },
      {
        id: 'carat',
        measure: '.0002',
        nameOKEI: 'Карат',
        shortnameOKEI: 'кар',
      },
      {
        id: 'newton',
        measure: '0.980665',
        nameOKEI: 'Ньютон',
        shortnameOKEI: 'Н',
      },
      {
        id: 'stone',
        measure: '63.5029318',
        nameOKEI: 'Стоун',
        shortnameOKEI: 'st',
      },
      {
        id: 'pound',
        measure: '4.5359237',
        nameOKEI: 'Фунт',
        shortnameOKEI: 'lb',
      },
      {
        id: 'ounce',
        measure: '.28349523125',
        nameOKEI: 'Унция',
        shortnameOKEI: 'oz',
      },
      {
        id: 'dram',
        measure: '.017718451953125',
        nameOKEI: 'Драм',
        shortnameOKEI: 'dr',
      },
      {
        id: 'grain',
        measure: '.0006479891',
        nameOKEI: 'Гран',
        shortnameOKEI: 'gr',
      },
    ],
  },
  {
    id: 'VOLUME',
    name: 'Громкость',
    value: [
      {
        id: 'decimeter cubic',
        measure: '1e-3',
        nameOKEI: 'Дециметр³',
        shortnameOKEI: 'дм³',
      },
      {
        id: 'centimeter cubic',
        measure: '1e-6',
        nameOKEI: 'Сантиметр³',
        shortnameOKEI: 'см³',
      },
      {
        id: 'millimeter cubic',
        measure: '1e-9',
        nameOKEI: 'Миллиметр³',
        shortnameOKEI: 'мм³',
      },
      {
        id: 'meter ubic',
        measure: '1',
        nameOKEI: 'Метр³',
        shortnameOKEI: 'м³',
      },
    ],
  },
];
