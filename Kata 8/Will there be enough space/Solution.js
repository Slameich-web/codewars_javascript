const enough = (cap, on, wait) => {
  const result = cap - (on + wait);
  if (result <= 0) {
    return result * -1;
  }
  return 0;
};
