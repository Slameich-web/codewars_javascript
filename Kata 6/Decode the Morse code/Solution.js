const decodeMorse = (morseCode) => {
  return morseCode
    .split(" ")
    .map((character) => (character === "" ? " " : MORSE_CODE[character]))
    .join("")
    .replace(/  +/g, " ")
    .trim();
};
