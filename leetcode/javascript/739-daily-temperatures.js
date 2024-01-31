/**
 * https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const output = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const curr = temperatures[i];
    while (stack.length > 0 && curr > stack[stack.length - 1][0]) {
      const [_, j] = stack.pop();
      output[j] = i - j; 
    }
    stack.push([curr, i]);
  }

  return output;
};