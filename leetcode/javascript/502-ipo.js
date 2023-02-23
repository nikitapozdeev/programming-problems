/**
 * https://leetcode.com/problems/ipo
 */

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const maxProfit = new PriorityQueue({ compare: (a, b) => b - a });
  const minCapital = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
  for (i = 0; i < capital.length; i++) {
    minCapital.enqueue([capital[i], profits[i]]);
  }

  for (let i = 0; i < k; i++) {
    while (minCapital.size() && minCapital.front()[0] <= w) {
      const [_, profit] = minCapital.dequeue();
      maxProfit.enqueue(profit);
    }

    if (!maxProfit.size()) {
      break;
    }

    w += maxProfit.dequeue();
    console.log(w);
  }

  return w;
};