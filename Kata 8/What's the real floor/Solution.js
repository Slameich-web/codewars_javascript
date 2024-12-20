const getRealFloor = (n) => {
  let result = n;
  if (result > 13) {
    result -= 1;
  }
  if (result > 0) {
    result -= 1;
  }

  return result;
};
