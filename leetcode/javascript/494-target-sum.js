/**
 * https://leetcode.com/problems/target-sum
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let count = 0;

  const backtrack = (index, sum) => {
    if (index >= nums.length) {
      count += Number(sum === target);
      return;
    }

    backtrack(index + 1, sum + nums[index]);
    backtrack(index + 1, sum - nums[index]);
  }

  backtrack(0, 0);

  return count;
};