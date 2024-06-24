import { useState } from "react";

export const useConvectorMode = () => {
  const listUnits = 'listUnits';
  const convectortUnit = 'convectortUnit';

  const [convectorMode, setMode] = useState(listUnits);

  const isListUnits = (mode) => mode === listUnits;

  const setConvectorMode = () => {
    if (isListUnits(convectorMode)) setMode(convectortUnit);
    else setMode(listUnits);
  };

  return [convectorMode, setConvectorMode]
};
