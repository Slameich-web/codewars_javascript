const printerError = (word) => {
  const invalidCharacters = [...word]
    .map((word) => word.charCodeAt(0))
    .filter((charCode) => charCode < 97 || charCode > 109);
  const result = `${invalidCharacters.length}/${word.length}`;
  return result;
};
