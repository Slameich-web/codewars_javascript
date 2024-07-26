const findNb = (totalVolume) => {
  let currentVolumeSum = 0;
  let numberOfCubes = 0;

  while (currentVolumeSum < totalVolume) {
    numberOfCubes++;
    currentVolumeSum += Math.pow(numberOfCubes, 3);
  }
  const result = currentVolumeSum === totalVolume ? numberOfCubes : -1;
  return result;
};
