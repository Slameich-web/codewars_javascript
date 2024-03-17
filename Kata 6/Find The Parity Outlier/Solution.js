function findOutlier(integers) {
  let evenArr = [];
  let oddArr = [];
  for (let index = 0; index < integers.length; index++) {
    const element = integers[index];
    if (element % 2 == 0) {
      evenArr.push(element);
    } else {
      oddArr.push(element);
    }
    if (evenArr.length > 0 && oddArr.length > 0) {
      if (evenArr.length > oddArr.length) {
        return oddArr[0];
      }
      if (oddArr.length > evenArr.length) {
        return evenArr[0];
      }
    }
  }
}
