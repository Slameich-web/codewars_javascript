const addLength = (str) => {
  let arr = str.split(" ");
  let size;
  for (let i = 0; i < arr.length; i++) {
    size = arr[i].length;
    arr[i] += " " + size;
  }

  return arr;
};
