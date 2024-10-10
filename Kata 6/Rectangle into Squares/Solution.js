const sqInRect = (lng, wdth) => {
  let arr = [];
  if (lng === wdth) {
    return null;
  }
  while (lng > 0 && wdth > 0) {
    arr.push(lng > wdth ? wdth : lng);
    if (lng > wdth) {
      lng -= wdth;
    } else {
      wdth -= lng;
    }
  }
  return arr;
};
