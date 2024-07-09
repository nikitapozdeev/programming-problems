/**
 * https://leetcode.com/problems/average-waiting-time
 */

/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
  let wait = 0;
  let last = 0;

  for (const [arrive, time] of customers) {
    const start = arrive;
    const end = arrive + time + Math.max(0, (last - arrive));
    wait += end - start;
    last = end;
  }

  return wait / customers.length;
};