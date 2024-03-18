const digitize = (n) => {
  return n.toString().split("").reverse().map(Number);
};
