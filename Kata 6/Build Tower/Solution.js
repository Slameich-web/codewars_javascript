const towerBuilder = (nFloors) => {
  let space = [];
  let star = [];
  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    star = "*".repeat(2 * i - 1);
    result.push(`${space}${star}${space}`);
  }
  return result;
};
