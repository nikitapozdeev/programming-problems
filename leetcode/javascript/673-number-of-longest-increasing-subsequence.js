/**
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const size = nums.length;
  const length = new Array(size).fill(1);
  const count = new Array(size).fill(1);
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (length[j] + 1 > length[i]) {
          length[i] = length[j] + 1;
          count[i] = 0;
        }

        if (length[j] + 1 === length[i]) {
          count[i] += count[j];
        }
      }
    }
  }

  let maxLength = 0;
  let answer = 0;

  for (const l of length) {
    maxLength = Math.max(maxLength, l);
  }

  for (let i = 0; i < size; i++) {
    if (length[i] === maxLength) {
      answer += count[i];
    }
  }

  return answer;
};