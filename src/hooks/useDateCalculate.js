import { useState } from 'react';

export const useDateCalculate = () => {
  const [date, setDate] = useState();
  const [result, setResult] = useState("0");

  const today = new Date();




  return { date, setDate, result };
};
