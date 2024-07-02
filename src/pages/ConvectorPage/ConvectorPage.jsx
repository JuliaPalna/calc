import React from 'react';

import { LISTUNIT } from '../../globals/modeConvextor';
import { ARRAYUNITS } from '../../globals/arrayUnits';

import { usePhysicalQuntityContext } from '../../context/physicalQuantityContext';

import { ListButtons } from '../../ui/ListButtons';
import { СonvectorPhysicalQuntity } from '../../ui/СonvectorPhysicalQuntity';

import { useConvectorMode } from '../../hooks/useConvectorMode';
import { arrayFilter } from '../../utils/arrayFilter';

export function ConvectorPage() {
  const { setPhysicalQuntity } = usePhysicalQuntityContext();
  const [convectorMode, setConvectorMode] = useConvectorMode();

  const nahdelClickButtonUnit = (e) => {
    setConvectorMode();

    const unit = arrayFilter(e);
    setPhysicalQuntity(unit);
  };

  const application =
    convectorMode === LISTUNIT ? (
      <ListButtons array={ARRAYUNITS} onClick={nahdelClickButtonUnit} />
    ) : (
      <СonvectorPhysicalQuntity onClick={setConvectorMode} />
    );

  return <React.Fragment>{application}</React.Fragment>;
}
