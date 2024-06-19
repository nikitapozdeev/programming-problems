/**
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 */

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
  if (m * k > bloomDay.length) {
    return -1;
  }

  const getBouquetsCount = (day) => {
    let total = 0;
    let curr = 0;

    for (const bDay of bloomDay) {
      if (bDay <= day) {
        curr++;
      } else {
        curr = 0;
      }

      if (curr === k) {
        total++;
        curr = 0;
      }
    }

    return total;
  }

  let days = -1;
  let low = 0;
  let high = bloomDay.reduce((acc, curr) => Math.max(acc, curr));

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const count = getBouquetsCount(mid);
    if (count >= m) {
      days = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return days;
};