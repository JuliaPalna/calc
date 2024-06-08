const valuta = [
  {
    name: 'ruble',
    measure: '100',
    nameOKEI: 'Рубль',
    shortnameOKEI: 'RU',
  },
  {
    name: 'usd',
    measure: '1',
    nameOKEI: 'Доллар США',
    shortnameOKEI: 'USD',
  },
  {
    name: 'eur',
    measure: '.93',
    nameOKEI: 'Евро',
    shortnameOKEI: 'EUR',
  },
]

const discount = [
  {
    name: 'start price',
    value: 'Первоначальная цена',
  },
  {
    name: 'discount',
    value: 'Скидка(%)',
  },
]

const date =[
    {
        name: 'from',
        value: 'C',
    },
    {
        name: 'to',
        value: 'До',
    },
]

const length = [
    {
        name: 'meter',
        measure: 1,
        nameOKEI: 'Метр',
        shortnameOKEI: 'м',
    },
    {
        name: 'centimeter',
        measure: .01,
        nameOKEI: 'Сантиметр',
        shortnameOKEI: 'см',
    },
    {
        name: 'kilometer',
        measure: 1000,
        nameOKEI: 'Километр',
        shortnameOKEI: 'км',
    },
    {
        name: 'millimeter',
        measure: .001,
        nameOKEI: 'Милиметр',
        shortnameOKEI: 'мм',
    },
]

const square = [
    {
        name: 'square meter',
        measure: '1',
        nameOKEI: 'Квадратный метр',
        shortnameOKEI: 'м²',
    },
    {
        name: 'square kilometer',
        measure: '1e6',
        nameOKEI: 'Квадратный киллометр',
        shortnameOKEI: 'км²',
    },
    {
        name: 'square centimeter',
        measure: '1e-4',
        nameOKEI: 'Квадратный сантиметр',
        shortnameOKEI: 'см²',
    },
    {
        name: 'square millimeter',
        measure: '1e-6',
        nameOKEI: 'Квадратный миллиметр',
        shortnameOKEI: 'мм²',
    },
    {
        name: 'hectare',
        measure: '1e4',
        nameOKEI: 'Гектар',
        shortnameOKEI: 'га',
    },
    {
        name: 'ar',
        measure: '1e2',
        nameOKEI: 'Ар',
        shortnameOKEI: 'а',
    },
]

const speed = [
    {
        name: 'kilometr per second',
        measure: '1000',
        nameOKEI: 'Километр в секунду',
        shortnameOKEI: 'км/c',
    },
    {
        name: 'meter per second',
        measure: '1',
        nameOKEI: 'Метр в секунду',
        shortnameOKEI: 'м/c',
    },
    {
        name: 'kilometer per hour',
        measure: '.277777778',
        nameOKEI: 'Километр в час',
        shortnameOKEI: 'км/ч',
    },
    {
        name: 'mile per second',
        measure: '1609.34401',
        nameOKEI: 'Миля в секунду',
        shortnameOKEI: 'миль/с',
    },
    {
        name: 'mile per hour',
        measure: '.44704',
        nameOKEI: 'Миля в час',
        shortnameOKEI: 'миль/ч',
    },
    {
        name: 'foot per second',
        measure: '.3048',
        nameOKEI: 'Фут в секунду',
        shortnameOKEI: 'фут/с',
    },
    {
        name: 'foot per minute',
        measure: '.00508',
        nameOKEI: 'Фут в минуту',
        shortnameOKEI: 'фут/м',
    },
    {
        name: 'knot',
        measure: '.514',
        nameOKEI: 'Узел',
        shortnameOKEI: 'узел',
    },
    {
        name: 'Max',
        measure: '330',
        nameOKEI: 'Мах',
        shortnameOKEI: 'Ma',
    },
    {
        name: 'speed light',
        measure: '299792458',
        nameOKEI: 'Скорость света',
        shortnameOKEI: 'c',
    },
]
const time = [
    {
        name: 'century',
        measure: '36525',
        nameOKEI: 'Век',
        shortnameOKEI: 'в',
    },
    {
        name: 'year',
        measure: '365',
        nameOKEI: 'Год',
        shortnameOKEI: 'г',
    },
    {
        name: 'week',
        measure: '7',
        nameOKEI: 'Неделя',
        shortnameOKEI: 'нед',
    },
    {
        name: 'day',
        measure: '1',
        nameOKEI: 'Сутки',
        shortnameOKEI: 'сут',
    },
    {
        name: 'hour',
        measure: '.0416666667',
        nameOKEI: 'Час',
        shortnameOKEI: 'ч',
    },
    {
        name: 'minute',
        measure: `${1/1440}`,
        nameOKEI: 'Минута',
        shortnameOKEI: 'мин',
    },
    {
        name: 'second',
        measure: `${1/86400}`,
        nameOKEI: 'Секунда',
        shortnameOKEI: 'c',
    },
]

const data = [
    {
        name: 'bytes',
        measure: '1',
        nameOKEI: 'Байт',
        shortnameOKEI: 'Б',
    },
    {
        name: 'kilobytes',
        measure: `${Math.pow(2, 10)}`,
        nameOKEI: 'Килобайт',
        shortnameOKEI: 'КБ',
    },
    {
        name: 'megabytes',
        measure: `${Math.pow(2, 20)}`,
        nameOKEI: 'Мегабайт',
        shortnameOKEI: 'МБ',
    },
    {
        name: 'gigabytes',
        measure: `${Math.pow(2, 30)}`,
        nameOKEI: 'Гигабайт',
        shortnameOKEI: 'ГБ',
    },
    {
        name: 'terabyte',
        measure: `${Math.pow(2, 40)}`,
        nameOKEI: 'Терабайт',
        shortnameOKEI: 'ТБ',
    },
    {
        name: 'petabyte',
        measure: `${Math.pow(2, 50)}`,
        nameOKEI: 'Петабайт',
        shortnameOKEI: 'ПБ',
    },
]

const weight = [
    {
        name: 'kilogram',
        measure: '1',
        nameOKEI: 'Килограмм',
        shortnameOKEI: 'кг',
    },
    {
        name: 'gram',
        measure: '.001',
        nameOKEI: 'Грамм',
        shortnameOKEI: 'г',
    },
    {
        name: 'milligrams',
        measure: '.00001',
        nameOKEI: 'Миллиграмм',
        shortnameOKEI: 'мг',
    },
    {
        name: 'micrograms',
        measure: '.0000001',
        nameOKEI: 'Микрограмм',
        shortnameOKEI: 'мкг',
    },
    {
        name: 'hundredweight',
        measure: '100',
        nameOKEI: 'Центнер',
        shortnameOKEI: 'ц',
    },
    {
        name: 'tonne',
        measure: '1000',
        nameOKEI: 'Тонна',
        shortnameOKEI: 'т',
    },
    {
        name: 'carat',
        measure: '.0002',
        nameOKEI: 'Карат',
        shortnameOKEI: 'кар',
    },
    {
        name: 'newton',
        measure: '0.980665',
        nameOKEI: 'Ньютон',
        shortnameOKEI: 'Н',
    },
    {
        name: 'stone',
        measure: '63.5029318',
        nameOKEI: 'Стоун',
        shortnameOKEI: 'st',
    },
    {
        name: 'pound',
        measure: '4.5359237',
        nameOKEI: 'Фунт',
        shortnameOKEI: 'lb',
    },
    {
        name: 'ounce',
        measure: '.28349523125',
        nameOKEI: 'Унция',
        shortnameOKEI: 'oz',
    },
    {
        name: 'dram',
        measure: '.017718451953125',
        nameOKEI: 'Драм',
        shortnameOKEI: 'dr',
    },
    {
        name: 'grain',
        measure: '.0006479891',
        nameOKEI: 'Гран',
        shortnameOKEI: 'gr',
    },

]

const volume = [
    {
        name: 'decimeter cubic',
        measure: '1e-3',
        nameOKEI: 'Дециметр³',
        shortnameOKEI: 'дм³',
    },
    {
        name: 'centimeter cubic',
        measure: '1e-6',
        nameOKEI: 'Сантиметр³',
        shortnameOKEI: 'см³',
    },
    {
        name: 'millimeter cubic',
        measure: '1e-9',
        nameOKEI: 'Миллиметр³',
        shortnameOKEI: 'мм³',
    },
    {
        name: 'meter ubic',
        measure: '1',
        nameOKEI: 'Метр³',
        shortnameOKEI: 'м³',
    },
]

export { length, speed, time,
    square, valuta, date, data, weight, volume, discount}
