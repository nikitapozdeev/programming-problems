/**
 * https://leetcode.com/problems/find-polygon-with-the-largest-perimeter
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => a - b);

  let perimeter = -1;
  let sum = 0;

  for (const num of nums) {
    if (sum > num) {
      perimeter = sum + num;
    }

    sum += num;
  }  

  return perimeter;
};