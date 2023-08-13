/**
 * https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  const count = nums.length;
  const queue = [0];
  const seen = {};

  while (queue.length) {
    const i = queue.shift();
    if (i === count) {
      return true;
    }

    if (i + 1 < count && nums[i] === nums[i + 1] && !seen[i + 2]) {
      seen[i + 2] = true;
      queue.push(i + 2);
    }

    if (i + 2 < count && 
        ((nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) || 
         (nums[i] === nums[i + 1] - 1 && nums[i + 1] === nums[i + 2] - 1)) && 
        !seen[i + 3]) {
      seen[i + 3] = true;
      queue.push(i + 3);  
    }
  }

  return false;
};