import { isZero } from "./isFunction";

export const addNumber = (expession, number) => {
  return isZero(expession) ? number : expession + number;
};
