/**
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array
 */

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  let low = 1;
  let high = maxSum;

  const sum = (value) => {
    let count = 0;
    if (value > index) {
      count += Math.ceil((value + value - index) * (index + 1) / 2);
    } else {
      count += Math.ceil(value + 1) * value / 2 + index - value + 1;
    }

    if (value >= n - index) {
      count += Math.ceil((value + value - n + 1 + index) * (n - index) / 2);
    } else {
      count += Math.ceil((value + 1) * value / 2 + n - index - value);
    }

    return count - value
  }

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);
    if (sum(mid) <= maxSum) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  
  return low;
};