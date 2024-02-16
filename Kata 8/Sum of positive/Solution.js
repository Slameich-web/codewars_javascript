const positiveSum = (arr) => {
  return arr.reduce(
    (accumulator, current) => accumulator + Math.max(current, 0),
    0
  );
};
