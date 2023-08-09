/**
 * https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs
 */

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
  nums.sort((a, b) => a - b);
  let low = 0;
  let high = nums[nums.length - 1] - nums[0];

  const countPairs = (diff) => {
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] - nums[i] <= diff) {
        pairs++;
        i++;
      }
    }

    return pairs;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (countPairs(mid) >= p) {
      high = mid;
    } else {
      low = mid + 1; 
    }
  }

  return low;
};

// [1, 2, 2, 4]