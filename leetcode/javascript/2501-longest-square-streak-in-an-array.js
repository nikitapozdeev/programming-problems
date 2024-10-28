/**
 * https://leetcode.com/problems/longest-square-streak-in-an-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  const set = new Set(nums);
  let maxStreak = 0;
  let threshold = 10 ** 5;

  for (let num of nums) {
    streak = 0;

    while (num < threshold && set.has(num)) {
      streak++;
      num *= num;
    }

    maxStreak = Math.max(maxStreak, streak);
  }

  return maxStreak > 1 ? maxStreak : -1;
};