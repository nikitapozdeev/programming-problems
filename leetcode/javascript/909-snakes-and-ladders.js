/**
 * https://leetcode.com/problems/snakes-and-ladders
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  const rowsCount = board.length;
  const totalCount = rowsCount * rowsCount;

  const getTileCoord = (tile) => {
    let row = Math.floor((tile - 1) / rowsCount);
    let col = (tile - 1) % rowsCount;
    if (row % 2 !== 0) {
      col = rowsCount - 1 - col;
    }
    row = rowsCount - row - 1;
    return { row, col };
  }

  const visited = {};
  const queue = [[1, 0]];

  while (queue.length) {
    const [curr, move] = queue.shift();

    for (let i = 1; i < 7; i++) {
      let next = curr + i;
      const { row, col } = getTileCoord(next);

      if (board[row][col] !== -1) {
        next = board[row][col];
      }

      if (next === totalCount) {
        return move + 1;
      }

      if (!visited[next]) {
        visited[next] = 1;
        queue.push([next, move + 1]);
      }
    }
  }

  return -1;
};