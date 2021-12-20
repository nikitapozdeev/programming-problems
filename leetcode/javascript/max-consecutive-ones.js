/**
 * https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let maxBuf = 0;
  const capacity = nums.length;

  for (let i = 0; i <= capacity; ++i) {
    if (nums[i] === 1) {
      maxBuf++;
    } else if (nums[i] === 0 || i === capacity) {
      max = maxBuf > max ? maxBuf : max;
      maxBuf = 0;
    }
  }

  return max;
};