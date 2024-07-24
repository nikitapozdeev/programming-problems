/**
 * https://leetcode.com/problems/sort-the-jumbled-numbers
 */

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
  const cache = {};
  const convert = (num) => {
    if (num in cache) {
      return cache[num];
    }

    const digits = [];
    for (const char of String(num)) {
      const digit = mapping[Number(char)];
      if (digit === 0 && !digits.length) {
        continue;
      }
      digits.push(digit);
    }

    cache[num] = Number(digits.join(''));
    return cache[num];
  }

  return nums.sort((a, b) => {
    const aa = convert(a);
    const bb = convert(b);
    return aa - bb;
  });
};