const betterThanAverage = (classPoints, yourPoints) => {
  let sum = classPoints.reduce((a, b) => (a += b));
  let average = sum / classPoints.length;
  let result = average > yourPoints ? false : true;

  return result;
};
