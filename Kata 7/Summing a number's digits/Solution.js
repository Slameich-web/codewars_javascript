const sumDigits = (number) => {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((total, el) => total + Number(el), 0);
};
