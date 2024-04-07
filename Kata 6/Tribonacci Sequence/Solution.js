function tribonacci(signature, n) {
  let result = signature;
  for (i = 3; i < n; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }
  return result.slice(0, n);
}
