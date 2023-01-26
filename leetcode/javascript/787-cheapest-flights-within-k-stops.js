/**
 * https://leetcode.com/problems/cheapest-flights-within-k-stops
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const adj = [...new Array(n)].map(() => []);
  for (const [from, to, price] of flights) {
    adj[from].push([to, price]);
  }

  const visited = {};
  const minHeap = new MinPriorityQueue({
	compare: (a, b) => a[1] > b[1],
  });
  minHeap.enqueue([src, 0, k + 1]);

  while (minHeap.size() > 0) {
    const [city, price, stop] = minHeap.dequeue();
    visited[city] = stop;

    if (city === dst) {
      return price;
    }

    if (stop <= 0 || !adj[city]) {
      continue;
    }

    for (const [nextCity, nextPrice] of adj[city]) {
      if (visited[city] && visited[nextCity] >= stop - 1) {
        continue;
      }

	  minHeap.enqueue([nextCity, price + nextPrice, stop - 1]);
    }
  }

  return -1;
};