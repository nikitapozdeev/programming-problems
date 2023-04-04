/**
 * https://leetcode.com/problems/optimal-partition-of-string
 */

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  const seen = new Array(26).fill(-1);
  let left = 0;
  let answer = 1;
  let codeOffset = 'a'.charCodeAt(0);

  for (let right = 0; right < s.length; right++) {
    const charCode = s.charCodeAt(right) - codeOffset;
    if (seen[charCode] >= left) {
      answer++;
      left = right;
    }
    seen[charCode] = right;
  }

  return answer;
};