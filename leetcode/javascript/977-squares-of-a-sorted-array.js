/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * Time: O(n)
 * Memory: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let i = end;
  const res = new Array(nums.length);

  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      res[i] = nums[start] ** 2;
      start++;
    } else {
      res[i] = nums[end] ** 2;
      end--;
    }
    i--;
  }
  
  return res;
};
