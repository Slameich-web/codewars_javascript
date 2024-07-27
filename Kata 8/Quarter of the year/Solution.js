const quarterOf = (month) => {
  if (month < 4) {
    return 1;
  }
  if (month < 7) {
    return 2;
  }
  if (month < 10) {
    return 3;
  }
  return 4;
};
