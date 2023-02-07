/**
 * https://leetcode.com/problems/fruit-into-baskets
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let total = 0;
  let count = 0;
  let left = 0;
  let basketSize = 0;
  const basket = {};

  for (let right = 0; right < fruits.length; right++) {
    if (!basket[fruits[right]]) {
      basket[fruits[right]] = 0;
      basketSize++;
    }
    basket[fruits[right]]++;
    count++;

    while (basketSize > 2) {
      basket[fruits[left]]--;
      if (basket[fruits[left]] === 0) {
        delete basket[fruits[left]];
        basketSize--;
      }
      count--;
      left++;
    }

    total = Math.max(total, count);
  }
  return total;
};