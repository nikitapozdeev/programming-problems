/**
 * https://leetcode.com/problems/regions-cut-by-slashes
 */

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const size = grid.length * 3;
  const map = new Array(size).fill().map(() => new Array(size).fill(0));
  
  const mapCharacter = (char, row, col) => {
    row *= 3;
    col *= 3;

    if (char === '/') {
      map[row][col] = 0;
      map[row + 1][col] = 0;
      map[row + 2][col] = 1;
      
      map[row][col + 1] = 0;
      map[row + 1][col + 1] = 1;
      map[row + 2][col + 1] = 0;

      map[row][col + 2] = 1;
      map[row + 1][col + 2] = 0;
      map[row + 2][col + 2] = 0;
    } else if (char === '\\') {
      map[row][col] = 1;
      map[row + 1][col] = 0;
      map[row + 2][col] = 0;
      
      map[row][col + 1] = 0;
      map[row + 1][col + 1] = 1;
      map[row + 2][col + 1] = 0;

      map[row][col + 2] = 0;
      map[row + 1][col + 2] = 0;
      map[row + 2][col + 2] = 1;
    }
  }

  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[row].length; ++col) {
      mapCharacter(grid[row][col], row, col);
    }
  }
  
  const fill = (row, col) => {
    if (row < 0 || row >= size || col < 0 || col >= size) {
      return;
    }

    if (map[row][col] !== 0) {
      return;
    }

    map[row][col] = -1;
    fill(row + 1, col);
    fill(row - 1, col);
    fill(row, col + 1);
    fill(row, col - 1);
  }

  let count = 0;

  for (let row = 0; row < size; ++row) {
    for (let col = 0; col < size; ++col) {
      if (map[row][col] === 0) {
        fill(row, col);
        count++;
      }
    }
  }

  return count;
};