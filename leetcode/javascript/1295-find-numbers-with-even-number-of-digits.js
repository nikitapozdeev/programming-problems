/**
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter((num) => `${num}`.length % 2 === 0).length;
};

/**
 * Solution without string manipulation.
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let evens = 0;

  for (let num of nums) {
    let digits = 0;
    while (num > 0) {
      digits++;
      num = Math.floor(num / 10);
    }

    if (digits % 2 === 0) {
      evens++;
    }
  }

  return evens;
};