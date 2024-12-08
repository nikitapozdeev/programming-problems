/**
 * https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag
 */

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  const canDistribute = (val) => {
    let total = 0;
    
    for (const num of nums) {
      const count = Math.ceil(num / val) - 1;
      total += count;

      if (total > maxOperations) {
        return false;
      }
    }

    return true;
  }

  let low = 1;
  let high = 0;

  for (const num of nums) {
    high = Math.max(high, num);
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (canDistribute(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};