const getPINs = (observed) => {
  const adjacent = [
    [0, 8],
    [1, 2, 4],
    [1, 2, 3, 5],
    [2, 3, 6],
    [1, 4, 5, 7],
    [2, 4, 5, 6, 8],
    [3, 5, 6, 9],
    [4, 7, 8],
    [5, 7, 8, 9, 0],
    [6, 8, 9],
  ];

  return observed
    .split("")
    .map((d) => adjacent[d | 0])
    .reduce(
      (accumulator, currentValue) => {
        return currentValue.reduce((innerAccumulator, innerCurrentValue) => {
          return innerAccumulator.concat(
            accumulator.map((item) => {
              return item + innerCurrentValue;
            })
          );
        }, []);
      },
      [""]
    );
};
