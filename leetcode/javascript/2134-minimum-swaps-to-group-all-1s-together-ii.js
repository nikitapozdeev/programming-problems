/**
 * https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
  const totalOnes = nums.reduce((acc, curr) => acc += curr);
  const len = nums.length;
  let maxOnes = 0;
  let currOnes = 0;
  let left = 0;

  for (let right = 0; right < nums.length * 2; ++right) {
    currOnes += Number(nums[right % len] === 1);

    if ((right - left + 1) === totalOnes) {
      maxOnes = Math.max(maxOnes, currOnes);
      currOnes -= Number(nums[left % len] === 1);
      left++;
    }
  }

  return totalOnes - maxOnes;
};