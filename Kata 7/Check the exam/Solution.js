const checkExam = (array1, array2) => {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result += 4;
    } else if (array2[i] === "") {
      result -= 0;
    } else {
      result -= 1;
    }
  }
  if (result < 0) {
    result = 0;
  }
  return result;
};
