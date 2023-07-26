/**
 * https://leetcode.com/problems/minimum-speed-to-arrive-on-time
 */

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  let low = 1;
  let high = 10_000_000;
  let min = -1;

  const checkTime = (speed) => {
    let time = 0;
    
    for (let i = 0; i < dist.length; i++) {
      const dt = dist[i] / speed;
      if (i === dist.length - 1) {
        time += dt;
      } else {
        time += Math.ceil(dt);
      }
    }

    return time;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (checkTime(mid) <= hour) {
      min = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return min;
};