/**
 * https://leetcode.com/problems/basic-calculator-ii
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let operand = '';
  let operator = '+';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (/\d/.test(char)) {
      operand += char;
    }
 
    if (/\D/.test(char) || i === s.length - 1) {
      if (char === ' ' && i !== s.length - 1) {
        continue;
      }
      
      const num = parseInt(operand);

      if (operator === '+') {
        stack.push(num);
      } else if (operator === '-') {
        stack.push(num * -1);
      } else if (operator === '*') {
        stack.push(stack.pop() * num)
      } else if (operator === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }

      operator = char;
      operand = '';
    }
  }

  let answer = 0;
  while (stack.length > 0) {
    answer += stack.pop(); 
  }

  return answer;
};