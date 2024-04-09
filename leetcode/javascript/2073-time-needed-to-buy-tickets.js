/**
 * https://leetcode.com/problems/time-needed-to-buy-tickets
 */

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let time = 0;
  
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      time += Math.min(tickets[i], tickets[k])
    } else {
      time += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return time;
};