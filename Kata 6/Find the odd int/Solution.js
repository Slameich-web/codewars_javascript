const findOdd = (A) => {
  let count = {};
  A.forEach((element) => {
    count[element] = count[element] ? count[element] + 1 : 1;
  });
  return +Object.keys(count).find((key) => count[key] % 2 === 1);
};
