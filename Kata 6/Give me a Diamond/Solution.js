const diamond = (n) => {
  if (n < 0 || n % 2 == 0) return null;
  for (let i = 0, diamond = ""; i < n; i++) {
    let stars = n - Math.abs(n - 2 * i - 1);
    let spaces = (n - stars) / 2;
    while (spaces-- > 0) diamond += " ";
    while (stars-- > 0) diamond += "*";
    diamond += "\n";
  }
  return diamond;
};
