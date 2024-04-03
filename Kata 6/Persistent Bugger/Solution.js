const persistence = (num, result = 0) => {
  const str = String(num);
  if (str.length === 1) {
    return result;
  }
  const mult = str.split("").reduce((a, b) => a * b);
  return persistence(mult, result + 1);
};
