import { deleteLastElement } from './functionString';
import { isLengthLessTwo } from './isFunction';

export const backspaceElement = (expession) => {
  if (isLengthLessTwo(expession)) return '0';
  return deleteLastElement(expession);
};
