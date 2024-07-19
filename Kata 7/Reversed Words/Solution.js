const reverseWords = (str) => {
  let splitArray = str.split(" ");
  let reversedArray = [];

  for (let i = 0; i < splitArray.length; i++) {
    let word = splitArray[i];
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    reversedArray.push(reversedWord);
  }
  return reversedArray.join(" ");
};
