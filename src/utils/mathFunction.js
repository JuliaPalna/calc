const calculatePercent = (number) => number / 100;

function checkButton(e) {
  const isButton = e.target.closest('button');
  if (isButton === null) {
    return;
  }

  return isButton;
}

function getButtonId(e) {
  const isButton = checkButton(e);
  return isButton?.id;
}

export { getButtonId, calculatePercent };
