const squareOrSquareRoot = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) === Math.floor(Math.sqrt(array[i]))) {
      result.push(Math.sqrt(array[i]));
    } else {
      result.push(Math.pow(array[i], 2));
    }
  }
  return result;
};
