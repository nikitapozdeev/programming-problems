/**
 * https://leetcode.com/problems/sum-of-subarray-minimums
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  let sum = 0;
  const mod = 1e9 + 7;
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
      const p = stack.pop();
      const l = stack.length > 0 ? p - stack[stack.length - 1] : p + 1;
      const r = i - p;
      sum += arr[p] * l * r;
      sum %= mod;
    }

    stack.push(i);
  }

  for (let i = 0; i < stack.length; i++) {
    const p = stack[i];
    const l = i > 0 ? p - stack[i - 1] : p + 1;
    const r = arr.length - p;
    sum += arr[p] * l * r;
    sum %= mod;
  }

  return sum;
};