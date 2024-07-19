function permutations(string) {
  if (string.length && string.length < 2) {
    return [string];
  }

  let result = [];

  for (let i = 0; i < string.length; i++) {
    const item = string[i];

    if (string.indexOf(item) !== i) {
      continue;
    }

    let piece = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let perm_item of permutations(piece)) {
      const perm = [item, perm_item].join("");
      result.push(perm);
    }
  }

  return result;
}
