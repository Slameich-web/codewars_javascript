const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw "RangeError";
  } else {
    let arrFactorial = [];
    for (i = n; i >= 1; i--) {
      let num = i;
      arrFactorial.push(num);
    }
    return arrFactorial.reduce((a, b) => {
      return a * b;
    }, 1);
  }
};
