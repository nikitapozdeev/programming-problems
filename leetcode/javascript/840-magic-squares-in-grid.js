/**
 * https://leetcode.com/problems/magic-squares-in-grid
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let count = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  const isMagicSquare = (rowCenter, colCenter) => {
    const sums = [];
    const seen = {};
    for (let r = rowCenter - 1; r <= rowCenter + 1; ++r) {
      for (let c = colCenter - 1; c <= colCenter + 1; ++c) {
        if (grid[r][c] > 9 || grid[r][c] <= 0 || seen[grid[r][c]]) return false;
        seen[grid[r][c]] = true;
      }
    }

    for (let r = rowCenter - 1; r <= rowCenter + 1; ++r) {
      let sum = 0;
      for (let c = colCenter - 1; c <= colCenter + 1; ++c) {
        sum += grid[r][c];
      }
      sums.push(sum);
    }

    for (let c = colCenter - 1; c <= colCenter + 1; ++c) {
      let sum = 0;
      for (let r = rowCenter - 1; r <= rowCenter + 1; ++r) {
        sum += grid[r][c];
      }
      sums.push(sum);
    }

    let primarySum = grid[rowCenter - 1][colCenter - 1] + grid[rowCenter][colCenter] + grid[rowCenter + 1][colCenter + 1];
    let secondarySum = grid[rowCenter - 1][colCenter + 1] + grid[rowCenter][colCenter] + grid[rowCenter + 1][colCenter - 1];
        
    sums.push(primarySum);
    sums.push(secondarySum);

    for (let i = 1; i < sums.length; ++i) {
      if (sums[i] !== sums[i - 1]) return false;
    }

    return true;
  }

  for (let row = 1; row < rows - 1; ++row) {
    for (let col = 1; col < cols - 1; ++col) {
      count += Number(isMagicSquare(row, col));
    }
  }

  return count;
};