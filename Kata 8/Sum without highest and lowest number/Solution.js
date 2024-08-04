const sumArray = (array) => {
  if (array) {
    array.sort((a, b) => {
      return a - b;
    });
    let sum = 0;
    for (let i = 1; i < array.length - 1; i++) {
      sum += array[i];
    }
    return sum;
  }
  return 0;
};
