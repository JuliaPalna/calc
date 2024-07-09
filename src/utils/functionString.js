const getPartStringStart = (string, index) => string.slice(0, index);
const getPartStringEnd = (string, index) => string.slice(index);
const getLastElement = (string) => string.slice(-1);
const getLastIndex = (string, element) => string.lastIndexOf(element);
const getValueStringExpression = (string) => eval(string);

const deleteLastElement = (string) => string.slice(0, -1);

export {
  getPartStringStart,
  getPartStringEnd,
  getLastElement,
  deleteLastElement,
  getLastIndex,
  getValueStringExpression,
};
