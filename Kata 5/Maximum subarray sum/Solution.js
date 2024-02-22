const maxSequence = function (arr) {
  const maxSums = [];
  arr.forEach((_, index) => {
    let ret = [];
    let sum = 0;
    for (let i = index; i < arr.length; i++) {
      sum += arr[i];
      ret.push(sum);
    }
    maxSums.push(Math.max(...ret));
  });
  let maxSum = Math.max(...maxSums);
  return Math.max(maxSum, 0);
};
