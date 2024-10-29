function fizzbuzz(n) {
  let array = [...Array(n + 1).keys()].slice(1);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      array[i] = "FizzBuzz";
    }
    if (array[i] % 5 === 0) {
      array[i] = "Buzz";
    }
    if (array[i] % 3 === 0) {
      array[i] = "Fizz";
    }
  }
  return array;
}
