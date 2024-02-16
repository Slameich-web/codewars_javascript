const summation = (number) => {
  let sum = 1;
  for (let i = 1; i < number; i++) {
    sum += i + 1;
  }

  return sum;
};
