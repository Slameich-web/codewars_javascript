const queueTime = (customers, n) => {
  const arr = new Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    const index = arr.indexOf(Math.min(...arr));
    arr[index] += customers[i];
  }

  return Math.max(...arr);
};
