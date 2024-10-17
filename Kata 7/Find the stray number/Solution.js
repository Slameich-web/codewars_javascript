const stray = (numbers) => {
  return numbers.find(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );
};
