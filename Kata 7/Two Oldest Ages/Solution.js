const twoOldestAges = (ages) => {
  const result = ages
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reverse();
  return result;
};
