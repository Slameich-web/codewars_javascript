const countBy = (x, n) => {
  let result = [];
  for (let i = 1; i < n + 1; i++) {
    result.push(x * i);
  }
  return result;
};
