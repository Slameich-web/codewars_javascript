const inArray = (array1, array2) => {
  const result = array1
    .filter((word) => array2.join(" ").includes(word))
    .sort();
  return result;
};
