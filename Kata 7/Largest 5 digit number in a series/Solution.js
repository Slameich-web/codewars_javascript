const solution = (digits) => {
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > result) {
      result = Number(number);
    }
  }
  return result;
};
