const isZero = (string) => string === '0' || string === 0;
const isLengthLessTwo = (string) => string.length <= 1;
const isNumber = (element) => Number.isFinite(+element);
const isPoint = (element) => element === '.';
const isLastElement = (string, index) => index === string.length - 1;
const isNotFound = (index) => index === -1;
const isInclude = (string, element) => string.includes(element);

export {
  isZero,
  isLengthLessTwo,
  isNumber,
  isLastElement,
  isNotFound,
  isInclude,
  isPoint,
};
