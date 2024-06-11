const findAverage = (array) => {
  let length = array.length;
  if (length === 0) {
    return 0;
  }
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += array[i];
  }
  return sum / length;
};
