const countSheeps = (sheep) => {
  let initialValue = 0;
  return sheep.reduce((currentSum, currentNumber) => {
    if (currentNumber) {
      return (currentSum += 1);
    } else {
      return currentSum;
    }
  }, initialValue);
};
