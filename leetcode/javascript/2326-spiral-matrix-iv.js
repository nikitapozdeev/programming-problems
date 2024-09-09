/**
 * https://leetcode.com/problems/spiral-matrix-iv
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  const matrix = new Array(m).fill().map(() => new Array(n).fill(-1));
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let row = 0;
  let col = 0;
  let d = 0;

  while (head) {
    matrix[row][col] = head.val;
    
    let [dCol, dRow] = directions[d];
    let nRow = row + dRow;
    let nCol = col + dCol;

    if (nRow < 0 || nRow >= m || nCol < 0 || nCol >= n || matrix[nRow][nCol] !== -1) {
      d = (d + 1) % directions.length;
    }

    [dCol, dRow] = directions[d];
    nRow = row + dRow;
    nCol = col + dCol;

    row = nRow;
    col = nCol;
    head = head.next;
  } 

  return matrix; 
};