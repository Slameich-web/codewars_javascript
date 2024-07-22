const arrayPlusArray = (arr1, arr2) => {
  const sum1 = arr1.reduce((accumulator, a) => {
    return accumulator + a;
  }, 0);
  const sum2 = arr2.reduce((accumulator, a) => {
    return accumulator + a;
  }, 0);
  return sum1 + sum2;
};
