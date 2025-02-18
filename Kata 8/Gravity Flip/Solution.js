const flip = (d, a) => {
  switch (d) {
    case "R":
      return a.sort((a, b) => a - b);
    case "L":
      return a.sort((a, b) => b - a);
    default:
      return a;
  }
};
