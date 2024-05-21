const nextBigger = (n) => {
  let array = n.toString().split("");

  let counter = -1;
  for (let i = array.length - 1; i > 0; i--) {
    if (+array[i] > +array[i - 1]) {
      counter = i - 1;
      break;
    }
  }

  if (counter == -1) {
    return counter;
  }

  let right = array.splice(counter);

  let splitter = right.splice(0, 1)[0];

  let min = null;
  let minIndex = null;
  for (let i = 0; i < right.length; i++) {
    if (right[i] > splitter) {
      if (min == null || right[i] < min) {
        min = right[i];
        minIndex = i;
      }
    }
  }

  if (minIndex == null) {
    return -1;
  }

  right.splice(minIndex, 1);
  right.push(splitter);
  right = right.sort();

  let result = +array.concat([min]).concat(right).join("");
  if (result < n) {
    return -1;
  }

  return result;
};
