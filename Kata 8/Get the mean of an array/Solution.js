const getAverage = (marks) => {
  let sum = marks.reduce((a, b) => {
    return a + b;
  }, 0);
  return Math.floor(sum / marks.length);
};
