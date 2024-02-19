const getCount = (str) => {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
};
