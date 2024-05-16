const findMissingLetter = (array) => {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  const isUpperCaseLetter = (letter) => letter.toUpperCase() === letter;

  const lowerCaseLetters = array.join("").toLowerCase();
  const firstLetter = lowerCaseLetters[0];
  const positionFirstLetterInAlphabet = ALPHABET.indexOf(firstLetter);
  const completeLetterSequence = ALPHABET.slice(positionFirstLetterInAlphabet);

  for (let i = 0; i < completeLetterSequence.length; i++) {
    if (completeLetterSequence[i] !== lowerCaseLetters[i]) {
      return isUpperCaseLetter(array[0])
        ? completeLetterSequence[i].toUpperCase()
        : completeLetterSequence[i];
    }
  }
};
