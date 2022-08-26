/**
 * https://leetcode.com/problems/fizz-buzz/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const answers = [];
  for (let i = 1; i <= n; i++) {
    let answer = '';
    if (i % 3 === 0) {
      answer += 'Fizz';
    }
    
    if (i % 5 === 0) {
      answer += 'Buzz';
    }
    
    answers.push(answer || String(i));
  }
  return answers;
};