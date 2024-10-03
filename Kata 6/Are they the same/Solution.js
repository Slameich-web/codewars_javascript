const comp = (array1, array2) => {
  if (!array1 || !array2 || array1.length !== array2.length) return false;

  const array1SquaredSorted = array1
    .map((number) => Math.pow(number, 2))
    .sort((a, b) => a - b);

  const array2Sorted = array2.sort((a, b) => a - b);

  for (let index = 0; index < array1SquaredSorted.length; index++) {
    if (array1SquaredSorted[index] !== array2Sorted[index]) return false;
  }

  return true;
};
