/**
 * https://leetcode.com/problems/different-ways-to-add-parentheses
 */

// I'm too dumb, so i took neetcode.io's solution

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
  };

  const compute = (left, right) => {
    const arr = [];

    for (let i = left; i < right; ++i) {
      const fn = operations[expression[i]];
      if (!fn) {
        continue;
      }

      const larr = compute(left, i - 1);
      const rarr = compute(i + 1, right);
      
      for (const a of larr) {
        for (const b of rarr) {
           arr.push(fn(a, b));
        }
      }
    }

    if (!arr.length) {
      arr.push(Number(expression.substring(left, right + 1)));
    }

    return arr;
  }

  return compute(0, expression.length - 1);;
};