//выбирает основную единицу измерения,
//далее относительно данной единицы производим расчет
export const convertUnit = ({
  number,
  unitMeasureFirst,
  unitMeasureSecond,
}) => {
  return (number * unitMeasureSecond) / unitMeasureFirst;
};
