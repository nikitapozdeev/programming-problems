/**
 * https://leetcode.com/problems/construct-quad-tree
 */

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  const dfs = (size, x, y) => {
    let isSame = true;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (grid[x][y] !== grid[x + i][y + j]) {
          isSame = false;
          break;
        }
      }
    }

    if (isSame) {
      return new Node(grid[x][y], true);
    }

    size >>= 1;
    const topLeft = dfs(size, x, y);
    const topRight = dfs(size, x, y + size);
    const bottomLeft = dfs(size, x + size, y);
    const bottomRight = dfs(size, x + size, y + size);

    return new Node(null, false, topLeft, topRight, bottomLeft, bottomRight);
  }

  return dfs(grid.length, 0, 0);
};