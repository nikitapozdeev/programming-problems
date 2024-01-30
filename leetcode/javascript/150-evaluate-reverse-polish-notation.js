/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!/^[\+\-\*\/]$/.test(token)) {
      stack.push(Number(token));
      continue;
    }

    const argB = stack.pop();
    const argA = stack.pop();

    if (token === '+') {
      stack.push(argA + argB);
    } else if (token === '-') {
      stack.push(argA - argB);
    } else if (token === '*') {
      stack.push(argA * argB);
    } else if (token === '/') {
      stack.push(Math.trunc(argA / argB));
    }
  }

  return stack[stack.length - 1];
};