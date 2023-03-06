/**
 * https://leetcode.com/problems/kth-missing-positive-number
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    const mid = (low + high) >> 1;
    const val = arr[mid];

    if (val - mid <= k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low + k;
};