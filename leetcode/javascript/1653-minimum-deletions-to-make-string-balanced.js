/**
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  let totalA = 0;
  for (const char of s) {
    totalA += Number(char === 'a');
  }

  let deletions = +Infinity;
  let leftB = 0;
  let rightA = totalA;

  for (let i = 0; i < s.length; ++i) {
    rightA -= Number(s[i] === 'a');
    deletions = Math.min(deletions, leftB + rightA);
    leftB += Number(s[i] === 'b');
  }

  return deletions;
};