const maxMultiple = (divisor, bound) => {
  if (bound < divisor) {
    return 0;
  }
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
};
