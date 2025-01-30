const encrypt = (text, n) => {
  if (!text || n <= 0) {
    return text;
  }
  while (n--) {
    let array = "";
    for (let i = 1; i < text.length; i += 2) {
      array += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      array += text[i];
    }
    text = array;
  }
  return text;
};

const decrypt = (encryptedText, n) => {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }
  const array = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < array.length; i += 2) {
      array[i] = encryptedText[j++];
    }
    for (let i = 0; i < array.length; i += 2) {
      array[i] = encryptedText[j++];
    }
    encryptedText = array.join("");
  }
  return encryptedText;
};
