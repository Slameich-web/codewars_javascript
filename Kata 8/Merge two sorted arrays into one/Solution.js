const mergeArrays = (arr1, arr2) => {
  let arr = arr1.concat(arr2);
  let arrSort = arr.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  });
  let arr_2 = arrSort.filter((item, index) => {
    return arrSort.indexOf(item) === index;
  });
  return arr_2;
};
