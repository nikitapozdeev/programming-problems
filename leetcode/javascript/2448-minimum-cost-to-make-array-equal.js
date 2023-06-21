/**
 * https://leetcode.com/problems/minimum-cost-to-make-array-equal
 */

/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
  let low = +Infinity;
  let high = -Infinity;
  for (const num of nums) {
    low = Math.min(low, num);
    high = Math.max(high, num);
  }

  const findCost = (base) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += Math.abs(base - nums[i]) * cost[i];
    }
    return sum;
  }

  let minCost = findCost(nums[0]);
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const costA = findCost(mid);
    const costB = findCost(mid + 1);
    minCost = Math.min(costA, costB);

    if (costA > costB) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return minCost;
};