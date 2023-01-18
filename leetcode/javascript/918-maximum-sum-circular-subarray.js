/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let total = 0;
  let currMin = 0;
  let currMax = 0;
  let [minSum] = nums;
  let [maxSum] = nums;

  for (const num of nums) {
    currMin = Math.min(currMin, 0) + num;
    currMax = Math.max(currMax, 0) + num;
    minSum = Math.min(currMin, minSum);
    maxSum = Math.max(currMax, maxSum);
    total += num;
  }

  return total === minSum 
    ? maxSum
    : Math.max(maxSum, total - minSum);
};