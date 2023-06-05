/**
 * https://leetcode.com/problems/check-if-it-is-a-straight-line
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const getDX = (a, b) => a[0] - b[0];
  const getDY = (a, b) => a[1] - b[1];

  const dx = getDX(coordinates[0], coordinates[1]);
  const dy = getDY(coordinates[0], coordinates[1]);

  for (let i = 2; i < coordinates.length; i++) {
    if (dy * getDX(coordinates[i], coordinates[0]) !== dx * getDY(coordinates[i], coordinates[0])) {
      return false;
    }
  }

  return true;
};