const moveZeros = (arr) => {
  if (arr[0] === 0) {
    arr.push(arr.splice(i, 1).pop());
  }
  for (var i = arr.length; i > 0; i--) {
    if (arr[i] === 0) {
      arr.push(arr.splice(i, 1).pop());
    }
  }
  return arr;
};
