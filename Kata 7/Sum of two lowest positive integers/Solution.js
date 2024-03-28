const sumTwoSmallestNumbers = (numbers) => {
  const first = Math.min(...numbers);
  numbers.splice(numbers.indexOf(first), 1);
  const second = Math.min(...numbers);
  return first + second;
};
