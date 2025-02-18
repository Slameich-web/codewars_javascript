const hello = (name) => {
  const correctName = name
    ? name[0].toUpperCase() + name.slice(1).toLowerCase()
    : "World";

  return `Hello, ${correctName}!`;
};
