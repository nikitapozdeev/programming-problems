/**
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  let shot = points[0][1];
  
  for (const [from, to] of points.slice(1)) {
    if (from > shot) {
      arrows++;
      shot = to;
    }
  }
  return arrows;
};