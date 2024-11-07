import { ARRAYUNITS } from '../globals/arrayUnits';

export const arrayFilter = (e) => {
  const element = ARRAYUNITS.filter((item) => item.id === e.target.id);
  return element[0];
};
