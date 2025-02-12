const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter((value) => {
    if (value % 2 === 0) {
      if (value === 0) {
        return true;
      }
      return value;
    }
  });
};
