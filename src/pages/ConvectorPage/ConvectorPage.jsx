import React from 'react';
import { useState } from 'react';
import { ListButtons } from '../../ui/ListButtons';
import { СonvectorUnit } from '../../ui/СonvectorUnit';
import { ARRAYUNITS } from '../../globals/arrayUnits';

import { useUnit } from '../../context/unitContext';
import { getElementID } from '../../utils/mathFunction';

export function ConvectorPage() {
  const listUnits = 'listUnits';
  const convectortUnit = 'convectortUnit';

  const [mode, setMode] = useState(listUnits);
  const { setUnit } = useUnit();

  const nahdelClick = (e) => {
    handelSetMode();

    const el = ARRAYUNITS.filter((item) => item.id === getElementID(e));
    setUnit(el[0]);
  };

  const isListUnits = (mode) => mode === listUnits;

  const handelSetMode = () => {
    if (isListUnits(mode)) setMode(convectortUnit);
    else setMode(listUnits);
  };

  let application = <ListButtons array={ARRAYUNITS} onClick={nahdelClick} />;

  if (!isListUnits(mode))
    application = <СonvectorUnit onClick={handelSetMode} />;

  return <React.Fragment>{application}</React.Fragment>;
}
