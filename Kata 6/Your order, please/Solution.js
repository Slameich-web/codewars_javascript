const order = (words) => {
  const array = words.split(" ");
  let sortedArray = [];
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
};
