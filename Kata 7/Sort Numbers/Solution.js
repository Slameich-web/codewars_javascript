const solution = (nums) => {
  if (nums === null) {
    return [];
  }
  return nums.sort((a, b) => a - b);
};
