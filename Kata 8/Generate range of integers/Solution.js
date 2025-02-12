const generateRange = (min, max, step) => {
  return Array(Math.floor((max - min + step) / step))
    .fill()
    .map(() => {
      while (min <= max) {
        return (min += step) - step;
      }
    });
};
