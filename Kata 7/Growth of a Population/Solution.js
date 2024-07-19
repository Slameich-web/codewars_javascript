const nbYear = (p0, percent, aug, p) => {
  let result = 0;
  while (p0 < p) {
    result++;
    p0 += Math.floor(+p0 * (percent / 100) + aug);
  }
  return result;
};
