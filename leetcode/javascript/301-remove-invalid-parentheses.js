/**
 * https://leetcode.com/problems/remove-invalid-parentheses/
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const queue = [s];
  const visited = { s: true };
  const results = [];

  const isValid = (expr) => {
    let count = 0;
    for (const char of expr) {
      if (char === '(') {
        count++;
      } else if (char === ')') {
        count--;
      } else {
        continue;
      }

      if (count < 0) {
        return false
      }
    }

    return count === 0;
  }

  let found = false;

  while (queue.length) {
    if (found) {
      break;
    }

    let steps = queue.length;

    while(steps--) {
      const expr = queue.shift();

      if (isValid(expr)) {
        results.push(expr);
        found = true;
        continue;
      }

      for (let i = 0; i < expr.length; ++i) {
        if (expr[i] !== '(' && expr[i] !== ')') {
          continue;
        }

        const substr = expr.substring(0, i) + expr.substring(i + 1);
        if (!visited[substr]) {
          queue.push(substr);
          visited[substr] = true;
        }
      }
    }
  }

  return results.length ? results : [""];
};