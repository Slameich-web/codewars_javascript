function highAndLow(num) {
  const numbers = num.split(" ");
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}
