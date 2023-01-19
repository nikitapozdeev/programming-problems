/**
 * https://leetcode.com/problems/subarray-sums-divisible-by-k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  const remainders = new Array(k).fill(0);
  remainders[0] = 1;

  let answer = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    const remainder = (k + sum % k) % k;
    answer += remainders[remainder];
    remainders[remainder]++;
  }
  return answer;
};