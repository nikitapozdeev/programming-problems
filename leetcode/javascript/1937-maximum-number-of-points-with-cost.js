/**
 * https://leetcode.com/problems/maximum-number-of-points-with-cost
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const rows = points.length;
  const cols = points[0].length;
  let prevRow = points[0];

  for (let r = 1; r < rows; ++r) {
    const left = new Array(cols).fill(0);
    const right = new Array(cols).fill(0);
    const currRow = [...points[r]];

    left[0] = prevRow[0];
    for (let col = 1; col < cols; ++col) {
      left[col] = Math.max(left[col - 1] - 1, prevRow[col]);
    }

    right[cols - 1] = prevRow[cols - 1];
    for (let col = cols - 2; col >= 0; --col) {
      right[col] = Math.max(right[col + 1] - 1, prevRow[col]);
    }

    for (let col = 0; col < cols; ++col) {
      currRow[col] += Math.max(left[col], right[col]);
    }

    prevRow = currRow;
  }

  let max = -Infinity;
  for (const score of prevRow) {
    max = Math.max(max, score);
  }

  return max;
};