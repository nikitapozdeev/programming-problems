/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let [maxCandie] = candies;
  for (let i = 1; i < candies.length; i++) {
    maxCandie = Math.max(maxCandie, candies[i]);
  }

  const answer = new Array(candies.length);
  for (let i = 0; i < candies.length; i++) {
    answer[i] = (candies[i] + extraCandies) >= maxCandie;
  }

  return answer;
};