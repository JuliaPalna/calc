import { LENGTH, SPEED, TIME, SQUARE, VALUTA, DATA, DATE, WEIGHT, VOLUME, DISCOUNT } from './array';

export function getArray(value) {
  let array = [];

  switch (value) {
    case 'Длина':
      array.push(...LENGTH);
      break;
    case 'Скорость':
      array.push(...SPEED);
      break;
    case 'Время':
      array.push(...TIME);
      break;
    case 'Площадь':
      array.push(...SQUARE);
      break;
    case 'Валюта':
      array.push(...VALUTA);
      break;
    case 'Дата':
      array.push(...DATE);
      break;
    case 'Данные':
      array.push(...DATA);
      break;
    case 'Масса':
      array.push(...WEIGHT);
      break;
    case 'Объем':
      array.push(...VOLUME);
      break;
    case 'Скидка':
      array.push(...DISCOUNT);
      break;
    default:
      break;
  }

  return array;
}
