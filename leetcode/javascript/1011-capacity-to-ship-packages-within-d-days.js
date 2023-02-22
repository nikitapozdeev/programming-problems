/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 */

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let low = 0;
  let high = 0;
  for (const weight of weights) {
    low = Math.max(low, weight);
    high += weight;
  }
  let answer = high;

  const canBeShipped = (capacity) => {
    let shippingDays = 1;
    let shipCapacity = capacity;
    for (const weight of weights) {
      if (shipCapacity - weight < 0) {
        shippingDays++;
        shipCapacity = capacity;
      }
      shipCapacity -= weight;
    }
    return shippingDays <= days;
  }

  while (low <= high) {
    const mid = (low + high) >> 1;
    if (canBeShipped(mid)) {
      answer = Math.min(answer, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
};