const pickPeaks = (arr) => {
  const result = { pos: [], peaks: [] };
  for (let i = 1; i < arr.length - 1; i++) {
    let next = 1;
    while (arr[i] === arr[i + next]) {
      next++;
    }

    if (arr[i] > arr[i - 1] && arr[i] > arr[i + next]) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }
  }
  return result;
};
