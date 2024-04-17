function isPangram(string) {
  for (let i = 65; i <= 90; i++) {
    if (string.toUpperCase().indexOf(String.fromCharCode(i)) === -1) {
      return false;
    }
  }
  return true;
}
