import { deleteLastElement, getLastElement } from "./functionString";
import { isPoint } from "./isFunction";
import { isMathOperator } from "./isMathOperator";

export const addMathOperator = (expession, operator) => {
  const lastElement = getLastElement(expession);

  return isMathOperator(lastElement) || isPoint(lastElement)
    ? deleteLastElement(expession) + operator
    : expession + operator;
};
