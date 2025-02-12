const findMissing = (list) => {
  const sum = list.reduce((a, b) => a + b, 0);
  return ((list[list.length - 1] + list[0]) * (list.length + 1)) / 2 - sum;
};
