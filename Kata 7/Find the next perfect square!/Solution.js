const findNextSquare = (sq) => {
  const squareRoot = Math.sqrt(sq);
  const isPerfectSquare = Number.isInteger(squareRoot);
  const result = isPerfectSquare ? Math.pow(squareRoot + 1, 2) : -1;
  return result;
};
