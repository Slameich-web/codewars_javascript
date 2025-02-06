const parse = (data) => {
  let currentValue = 0;

  const result = [];

  data.split("").forEach((command) => {
    if (command === "i") {
      currentValue++;
    }
    if (command === "d") {
      currentValue--;
    }
    if (command === "s") {
      currentValue = Math.pow(currentValue, 2);
    }
    if (command === "o") {
      result.push(currentValue);
    }
  });

  return result;
};
