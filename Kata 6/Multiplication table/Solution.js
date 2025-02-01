const getArrayOfNumbers = (number, multiplier) => {
  const result = [];

  for (let i = 1; i <= number; i++) {
    result.push(i * multiplier);
  }

  return result;
};

const multiplicationTable = (size) => {
  const arrayWrapper = Array(size).fill([]);

  const resultArray = arrayWrapper.map((subArray, index) => {
    return getArrayOfNumbers(size, index + 1);
  });

  return resultArray;
};
