const zeros = (n) => {
  let result = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    result += n;
  }
  return result;
};
