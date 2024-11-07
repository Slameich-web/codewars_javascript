const sumDigPow = (a, b) => {
  let ans = [];
  while (a <= b) {
    if (
      a
        .toString()
        .split("")
        .reduce((x, y, i) => x + y ** (i + 1), 0) === a
    )
      ans.push(a);
    a++;
  }
  return ans;
};
