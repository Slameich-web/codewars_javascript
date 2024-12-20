const findDifference = (a, b) => {
  const firstValue = a.reduce((acc, rec) => acc * rec);
  const secondValue = b.reduce((acc, rec) => acc * rec);
  const result = firstValue - secondValue;
  return Math.abs(result);
};
