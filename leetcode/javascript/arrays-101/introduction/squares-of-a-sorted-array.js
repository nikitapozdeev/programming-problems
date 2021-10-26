/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let iter = end;

  // the object is probably faster than an array
  const res = {};
  while (iter >= 0) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      res[iter] = nums[start] ** 2;
      start++;
    } else {
      res[iter] = nums[end] ** 2;
      end--;
    }
    iter--;
  }

  return Object.values(res);
};
