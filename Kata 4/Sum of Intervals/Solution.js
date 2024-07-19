function sumIntervals(intervals) {
  let result = 0;
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  intervals = intervals.reduce((acc, element, index, array) => {
    const anterior = array[index - 1];
    if (array.length > 1 && anterior !== undefined) {
      if (element[0] < acc[acc.length - 1]) {
        if (element[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = element[1];
        }
      } else {
        acc.push(...element);
      }
    } else {
      acc.push(...element);
    }
    return acc;
  }, []);

  for (let i = 0; i < intervals.length - 1; i += 2) {
    result += intervals[i + 1] - intervals[i];
  }
  return result;
}
