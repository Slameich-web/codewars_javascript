"use strict";
const flattenAndSort = (array) => {
  return [].concat(...array).sort((a, b) => a - b);
};
