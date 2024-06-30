const countPositivesSumNegatives = (input) => {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || !input.length) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? positiveNums++ : (negativeNums += num)));
  }
  return [positiveNums, negativeNums];
};
