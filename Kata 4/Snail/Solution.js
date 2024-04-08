snail = function (array) {
  const element = array[0].length;

  const visited = Array.from({ length: element }, (_) =>
    Array(element).fill(false)
  );
  const result = [];

  const valid = (row, col) =>
    0 <= row && row < element && 0 <= col && col < element;
  const canGoUp = (row, col) => valid(row - 1, col) && !visited[row - 1][col];
  const canGoDown = (row, col) => valid(row + 1, col) && !visited[row + 1][col];
  const canGoLeft = (row, col) => valid(row, col - 1) && !visited[row][col - 1];
  const canGoRight = (row, col) =>
    valid(row, col + 1) && !visited[row][col + 1];

  const visit = (row, col) => {
    result.push(array[row][col]);
    visited[row][col] = true;
  };

  for (let row = 0, col = 0; element > 0; ) {
    if (canGoRight(row, col)) {
      while (canGoRight(row, col)) {
        visit(row, col++);
      }
      continue;
    }

    if (canGoDown(row, col)) {
      while (canGoDown(row, col)) {
        visit(row++, col);
      }
      continue;
    }

    if (canGoLeft(row, col)) {
      while (canGoLeft(row, col)) {
        visit(row, col--);
      }
      continue;
    }

    if (canGoUp(row, col)) {
      while (canGoUp(row, col)) {
        visit(row--, col);
      }
      continue;
    }

    visit(row, col);
    break;
  }

  return result;
};
