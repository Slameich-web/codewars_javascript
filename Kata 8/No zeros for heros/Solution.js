const noBoringZeros = (n) => {
  if (n % 10 !== 0 || Math.abs(n) < 10) {
    return n;
  }

  return noBoringZeros(Math.floor(n / 10));
};
