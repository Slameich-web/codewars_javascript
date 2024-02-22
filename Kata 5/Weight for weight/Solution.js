function orderWeight(string) {
  return string
    .split(" ")
    .sort(
      (a, b) =>
        a.split("").reduce((a, b) => a + +b, 0) -
          b.split("").reduce((a, b) => a + +b, 0) ||
        a > b ||
        -(a < b)
    )
    .join(" ");
}
