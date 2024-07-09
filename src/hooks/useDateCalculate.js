import { useState } from 'react';
import { calculateDurationTime } from '../utils/calculateDurationTime';

export const useDateCalculate = () => {
  const today = new Date().toJSON().slice(0, 10);

  const [initialDate, setInitialDate] = useState(today);
  const [finalDate, setFinalDate] = useState(today);
  const [difference, setDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const changeInitialDate = (e) => {
    const date = e.target.value;

    setInitialDate(date);
    const duration = calculateDurationTime({ initialDate: date, finalDate });
    setDifference(duration);
  };

  const changeFinalDate = (e) => {
    const date = e.target.value;

    setFinalDate(date);
    const duration = calculateDurationTime({ initialDate, finalDate: date });
    setDifference(duration);
  };

  return {
    initialDate,
    finalDate,
    difference,
    changeInitialDate,
    changeFinalDate
  }


};
