const sumOfMinimums = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.min(...arr[i]);
  }
  return result;
};
