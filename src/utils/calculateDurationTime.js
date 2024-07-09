const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export const calculateDurationTime = ({ initialDate, finalDate }) => {
  const initialValue = dayjs(initialDate);
  const finalValue = dayjs(finalDate);

  const duration =
    initialValue < finalValue
      ? dayjs.duration(finalValue.diff(initialValue))
      : dayjs.duration(initialValue.diff(finalValue));
  // возвращает объект продолжительности с длительностью времени,
  // находящейся в промежутке между x и y

  return duration.$d;
};
