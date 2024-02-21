const duplicateCount = (text) => {
  const nText = text.toLowerCase();
  let myObj = {};
  let counter = 0;
  for (let i = 0; i < nText.length; i++) {
    if (!myObj[nText[i]]) {
      myObj[nText[i]] = 1;
    } else if (myObj[nText[i]] < 2) {
      myObj[nText[i]] += 1;
      counter++;
    }
  }
  return counter;
};
