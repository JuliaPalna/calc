import { length, speed, time, square, valuta,
  date, data, weight, volume, discount} from './array';

export function getArray(value) {
  let array = [];

  switch (value) {
    case 'Длина': array.push(...length); break;
    case 'Скорость': array.push(...speed); break;
    case 'Время': array.push(...time); break;
    case 'Площадь': array.push(...square); break;
    case 'Валюта': array.push(...valuta); break;
    case 'Дата': array.push(...date); break;
    case 'Данные': array.push(...data); break;
    case 'Масса': array.push(...weight); break;
    case 'Объем': array.push(...volume); break;
    case 'Скидка': array.push(...discount); break;
    default:
      break;
  }

  return array;
};
