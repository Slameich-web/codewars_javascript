const roundToNext5 = (n) => {
  if (n >= 0) {
    return Math.ceil(n / 5) * 5;
  }
  if (n < 0) {
    if (n % 5) {
      return n - (n % 5);
    }
    return n;
  }
};
