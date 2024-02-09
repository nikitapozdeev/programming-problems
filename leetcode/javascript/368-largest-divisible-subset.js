/**
 * https://leetcode.com/problems/largest-divisible-subset
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b);
  const cache = {};

  const dfs = (i) => {
    if (i === nums.length) {
      return [];
    }

    if (i in cache) {
      return cache[i];
    }

    let output = [nums[i]];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % nums[i] === 0) {
        const buf = [nums[i]].concat(dfs(j));
        if (buf.length > output.length) {
          output = buf;
        }
      }
    }
    
    cache[i] = output;
    return output;
  }  
  
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    const buf = dfs(i);
    if (buf.length > answer.length) {
      answer = buf;
    }
  }

  return answer;
};