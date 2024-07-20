const solution = (input, markers) => {
  const result = input
    .trimEnd()
    .split("\n")
    .map((s) => markers.reduce((t, m) => t.split(m)[0].trimEnd(), s));

  if (result) {
    return result.join("\n");
  }

  return result.join();
};
