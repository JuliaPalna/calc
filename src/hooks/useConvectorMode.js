import { useState } from 'react';

import { LISTUNIT, CONVECTORUNIT } from '../globals/modeConvextor';

export const useConvectorMode = () => {
  const [convectorMode, setMode] = useState(LISTUNIT);

  const isListUnits = (mode) => mode === LISTUNIT;

  const setConvectorMode = () => {
    if (isListUnits(convectorMode)) setMode(CONVECTORUNIT);
    else setMode(LISTUNIT);
  };

  return [convectorMode, setConvectorMode];
};
