const squareDigits = (num) => {
  num = num.toString();
  let result = "";
  let num1 = null;
  for (let i = 0; i < num.length; i++) {
    num1 = Number(num[i]);
    result += num1 ** 2;
  }
  return Number(result);
};
