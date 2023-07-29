/**
 * https://leetcode.com/problems/predict-the-winner
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  const turn = (left, right) => {
    if (left === right) {
      return nums[left];
    }

    return Math.max(
      nums[left] - turn(left + 1, right),
      nums[right] - turn(left, right - 1)
    );
  }

  return turn(0, nums.length - 1) >= 0;
};