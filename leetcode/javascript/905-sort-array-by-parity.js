/**
 * https://leetcode.com/problems/sort-array-by-parity/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  let evenPtr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let buf = nums[evenPtr];
      nums[evenPtr] = nums[i];
      nums[i] = buf;
      evenPtr++;
    }
  }
  return nums;
};