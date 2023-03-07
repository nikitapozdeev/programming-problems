/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  let min = +Infinity;
  let max = -Infinity;

  for (let i = 0; i < time.length; i++) {
    max = Math.max(max, time[i]);
    min = Math.min(min, time[i]);
  }

  let low = min;
  let high = min * totalTrips;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let trips = 0;
    for (i = 0; i < time.length; i++) {
      trips += Math.floor(mid / time[i]);
    }

    if (trips < totalTrips) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};