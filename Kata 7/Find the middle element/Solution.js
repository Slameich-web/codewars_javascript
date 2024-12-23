const gimme = (triplet) => {
  const sortedArray = [...triplet].sort((a, b) => a - b);
  const middleElement = sortedArray[1];
  return triplet.indexOf(middleElement);
};
