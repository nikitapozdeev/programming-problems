/**
 * https://leetcode.com/problems/permutations
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return [[...nums]];
  }

  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift();
    const permutations = permute(nums);

    for (const permutation of permutations) {  
      permutation.push(n);
      answer.push(permutation);
    }

    nums.push(n);
  }

  return answer;
};