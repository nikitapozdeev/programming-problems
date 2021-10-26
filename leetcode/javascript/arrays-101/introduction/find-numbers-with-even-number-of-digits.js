/**
 * https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter((num) => `${num}`.length % 2 === 0).length;
};
