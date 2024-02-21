const likes = (names) => {
  if (Array.isArray(names)) {
    return names.length > 3
      ? `${names.slice(0, 2).join(", ")} and ${
          names.length - 2
        } others like this`
      : names.length === 3
      ? `${names.slice(0, 2).join(", ")} and ${names[2]} like this`
      : names.length === 2
      ? `${names.join(" and ")} like this`
      : names.length === 1
      ? `${names[0]} likes this`
      : "no one likes this";
  }
};
