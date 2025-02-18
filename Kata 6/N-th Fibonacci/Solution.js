const nthFibo = (n) => {
  let result = [0, 1];
  for (let i = 0; i < n; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return result[n - 1];
};
