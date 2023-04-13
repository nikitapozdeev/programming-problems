/**
 * https://leetcode.com/problems/validate-stack-sequences
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = [];
  let ptr = 0;
  for (const element of pushed) {
    stack.push(element);
    while (stack.length > 0 && ptr < popped.length && stack[stack.length - 1] === popped[ptr]) {
      stack.pop();
      ptr++;
    }
  }

  return stack.length === 0;
};