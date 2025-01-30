const solve = (s) => {
  const uppercaseCount = (s.match(/[A-Z]/g) || []).length;
  const lowercaseCount = s.length - uppercaseCount;
  if (uppercaseCount > lowercaseCount) {
    return s.toUpperCase();
  }
  return s.toLowerCase();
};
