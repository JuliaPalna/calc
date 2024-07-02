import { ARRAYUNITS } from '../globals/arrayUnits';

import { getElementID } from './mathFunction';

export const arrayFilter = (e) => {
  const element = ARRAYUNITS.filter((item) => item.id === getElementID(e));
  return element[0];
};
