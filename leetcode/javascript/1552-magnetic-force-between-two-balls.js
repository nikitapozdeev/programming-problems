/**
 * https://leetcode.com/problems/magnetic-force-between-two-balls
 */

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
  const canDistribute = (minGap) => {
    let prevPosition = position[0];
    let balls = 1;

    for (let i = 1; i < position.length; ++i) {
      const currentPosition = position[i];
      const currentGap = currentPosition - prevPosition;
      if (currentGap >= minGap) {
        balls++;
        prevPosition = currentPosition;
      }

      if (balls === m) {
        return true
      }
    }

    return false;
  }

  position.sort((a, b) => a - b);
  let minGap = 1;
  let low = 1;
  let high = position[position.length - 1] / (m - 1) + 1;
  
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (canDistribute(mid)) {
      minGap = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return minGap;
};