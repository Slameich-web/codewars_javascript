const noBoringZeros = (n) => {
  return Number(String(n).replace(/0+$/, ""));
};
