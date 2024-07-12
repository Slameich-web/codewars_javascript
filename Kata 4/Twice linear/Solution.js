const dblLinear = (n) => {
  let result = [1];
  let firstPointer = 0;
  let secondPointer2 = 0;

  for (let i = 1; i <= n; i++) {
    result[i] = Math.min(
      2 * result[firstPointer] + 1,
      3 * result[secondPointer2] + 1
    );

    if (result[i] == 2 * result[firstPointer] + 1) {
      firstPointer++;
    }
    if (result[i] == 3 * result[secondPointer2] + 1) {
      secondPointer2++;
    }
  }
  result = result[n];
  return result;
};
