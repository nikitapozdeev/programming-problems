/**
 * https://leetcode.com/problems/rearrange-array-elements-by-sign/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const output = new Array(nums.length);
  let pos = 0;
  let neg = 1;
  for (const num of nums) {
    if (num > 0) {
      output[pos] = num;
      pos += 2;
    } else {
      output[neg] = num;
      neg += 2;
    }
  }
  return output;
};
