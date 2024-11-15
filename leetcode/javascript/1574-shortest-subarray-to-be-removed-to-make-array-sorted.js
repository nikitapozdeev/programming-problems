/**
 * https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
  let right = arr.length - 1;
  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let min = right;

  for (let left = 0; left < right && (left === 0 || arr[left - 1] <= arr[left]); ++left) {
    while (right < arr.length && arr[left] > arr[right]) {
      right++;
    }

    min = Math.min(min, right - left - 1);
  }

  return min;
};