/**
 * https://leetcode.com/problems/equal-row-and-column-pairs
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  let pairs = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let isEqual = true;
      for (let i = 0; i < grid.length; i++) {
        if (grid[row][i] !== grid[i][col]) {
          isEqual = false;
          break;
        }
      }
      if (isEqual) {
        pairs++;
      }
    }
  }
  return pairs;
};