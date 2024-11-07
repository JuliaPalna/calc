import { useState } from 'react';
import { calculateDurationTime } from '../utils/calculateDurationTime';

export const useDateConv = () => {
  const today = new Date().toJSON().slice(0, 10);

  const [initialDate, setInitialDate] = useState(today);
  const [finalDate, setFinalDate] = useState(today);
  const [difference, setDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const changeDate = (e) => {
    let initialValue = initialDate;
    let finalValue = finalDate;
    const inputId = e.target.id;

    if (inputId === 'initialDate') {
      initialValue = e.target.value;
      setInitialDate(initialValue);
    } else {
      finalValue = e.target.value;
      setFinalDate(finalValue);
    }

    const duration = calculateDurationTime({
      initialDate: initialValue,
      finalDate: finalValue,
    });

    setDifference(duration);
  };

  return {
    initialDate,
    finalDate,
    difference,
    changeDate,
  };
};
