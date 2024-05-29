/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
 */

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  let steps = 0;
  let carry = 0;
  
  for (let i = s.length - 1; i > 0; i--) {
    const bit = Number(s[i]) + carry;
    if (bit % 2 === 0) {
      steps++;
    } else {
      carry = 1;
      steps += 2;
    }
  }

  return steps + carry;
};