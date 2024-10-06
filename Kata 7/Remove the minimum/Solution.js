const removeSmallest = (numbers) => {
  const minNumber = Math.min(...numbers);

  const indexToRemove = numbers.indexOf(minNumber);

  return [
    ...numbers.slice(0, indexToRemove),
    ...numbers.slice(indexToRemove + 1),
  ];
};
