const productFib = (prod) => {
  let first = 0;
  let last = 1;
  while (first * last < prod) {
    const temp = last;
    last = first + last;
    first = temp;
  }
  return [first, last, first * last === prod];
};
