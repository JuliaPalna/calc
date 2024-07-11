import { usePhysicalQuntityContext } from '../../context/physicalQuantityContext';

import { DesktopViewCustomConv } from '../DesktopViewCustomConv';
import { DesktopViewDateConv } from '../DesktopViewDateConv';
import { DesktopViewDiscountConv } from '../DesktopViewDiscountConv';

export const DesktopViewСonvector = () => {
  const { physicalQuntity } = usePhysicalQuntityContext();

  if (physicalQuntity.name === 'Дата') {
    return <DesktopViewDateConv array={physicalQuntity.value} />;
  } else if (physicalQuntity.name === 'Скидка') {
    return <DesktopViewDiscountConv array={physicalQuntity.value} />;
  } else {
    return <DesktopViewCustomConv array={physicalQuntity.value} />;
  }
};
