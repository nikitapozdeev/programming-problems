/**
 * https://leetcode.com/problems/where-will-the-ball-fall/
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
  const answer = [];
  for (let i = 0; i < grid[0].length; i++) {
    const position = dfs(0, i, grid);
    answer.push(position);
  }
  return answer;
};

const dfs = (row, col, grid) => {
  if (row === grid.length) {
    return col;
  }
  
  const nextCol = col + grid[row][col];
  const isStuck = nextCol < 0 ||
                  nextCol > grid[row].length ||
                  grid[row][col] !== grid[row][nextCol];
  if (isStuck) {
    return -1;
  }
  
  return dfs(row + 1, nextCol, grid);
}