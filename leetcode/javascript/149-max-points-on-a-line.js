/**
 * https://leetcode.com/problems/max-points-on-a-line
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const len = points.length;
  if (len === 1) {
    return 1;
  }

  let max = 0;
  for (let i = 0; i < len; i++) {
    const angles = {};
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue;
      }
      
      const angle = Math.atan2(points[j][1] - points[i][1], points[j][0] - points[i][0]);
      angles[angle] = (angles[angle] || 0) + 1;
      max = Math.max(angles[angle] + 1, max);
    }
  }
  
  return max;
};