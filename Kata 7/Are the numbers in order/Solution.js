const inAscOrder = (arr) => {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  const result = arr.every((el, i) => el === sortedArray[i]);
  return result;
};
