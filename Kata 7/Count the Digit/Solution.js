const nbDig = (n, d) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    let square = (i * i + "").split("");
    square.forEach((s) => (s == d ? result++ : null));
  }
  return result;
};
