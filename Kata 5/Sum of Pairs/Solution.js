const sumPairs = (ints, s) => {
  if (ints.length < 2) {
    return undefined;
  }
  let intSet = new Set();
  intSet.add(ints[0]);
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
    if (intSet.has(needed)) {
      return [needed, ints[i]];
    }
    intSet.add(ints[i]);
  }
  return undefined;
};
