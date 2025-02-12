const dataReverse = (data) => {
  let result = [];
  while (data.length) {
    result.push(...data.splice(data.length - 8, data.length));
  }
  return result;
};
