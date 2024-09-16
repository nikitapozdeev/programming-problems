/**
 * https://leetcode.com/problems/minimum-time-difference
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  timePoints.sort((a, b) => toMinutes(a) - toMinutes(b));
  let min = (24 * 60) + toMinutes(timePoints[0]) - toMinutes(timePoints[timePoints.length - 1]);

  for (let i = 0; i < timePoints.length - 1; ++i) {
    const diff = toMinutes(timePoints[i + 1]) - toMinutes(timePoints[i]);
    min = Math.min(min, diff);
  }

  return min;
};

const toMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60) + minutes;
}