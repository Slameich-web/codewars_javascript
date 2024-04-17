function findEvenIndex(arr) {
  return arr.findIndex(
    (_, index, array) =>
      array.slice(0, index).reduce((acc, item) => acc + item, 0) ===
      array.slice(index + 1).reduce((acc, item) => acc + item, 0)
  );
}
