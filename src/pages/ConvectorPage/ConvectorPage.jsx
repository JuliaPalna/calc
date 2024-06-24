import React from 'react';
import { ListButtons } from '../../ui/ListButtons';
import { СonvectorPhysicalQuntity } from '../../ui/СonvectorPhysicalQuntity';
import { ARRAYUNITS } from '../../globals/arrayUnits';

import { getElementID } from '../../utils/mathFunction';
import { useConvectorMode } from '../../hooks/useConvectorMode';
import { usePhysicalQuntity } from '../../context/physicalQuantityContext';

export function ConvectorPage() {
  const [convectorMode, setConvectorMode] = useConvectorMode();

  const { setPhysicalQuntity } = usePhysicalQuntity();

  const nahdelClickButtonUnit = (e) => {
    setConvectorMode();

    const unit = ARRAYUNITS.filter((item) => item.id === getElementID(e));
    setPhysicalQuntity(unit[0]);
  };

  const application =
    convectorMode === 'listUnits' ? (
      <ListButtons array={ARRAYUNITS} onClick={nahdelClickButtonUnit} />
    ) : (
      <СonvectorPhysicalQuntity onClick={setConvectorMode} />
    );

  return <React.Fragment>{application}</React.Fragment>;
}
