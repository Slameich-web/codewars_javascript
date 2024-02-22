function rot13(message) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
}
