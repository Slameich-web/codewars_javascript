const oddOrEven = (array) => {
  return array.reduce((sum, item) => {
    return sum + item;
  }, 0) %
    2 ===
    0
    ? "even"
    : "odd";
};
