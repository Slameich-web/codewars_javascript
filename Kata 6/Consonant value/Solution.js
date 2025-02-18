const solve = (s) => {
  s = s.toLowerCase();
  let arr = s
    .slice()
    .replace(/[aeiuo]/g, " ")
    .replace(/\s+/g, " ");
  arr = arr.split(" ").map((v) =>
    v
      .split("")
      .map((v) => v.charCodeAt() - 96)
      .reduce((a, b) => a + b, 0)
  );
  return Math.max(...arr);
};
