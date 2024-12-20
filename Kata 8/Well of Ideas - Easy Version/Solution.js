const well = (x) => {
  const result = x.filter((value) => value === "good").length;
  if (!result) {
    return "Fail!";
  }
  if (result > 2) {
    return "I smell a series!";
  }
  return "Publish!";
};
