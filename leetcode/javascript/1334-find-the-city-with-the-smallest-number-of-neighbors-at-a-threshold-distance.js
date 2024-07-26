/**
 * https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  const adj = {};
  for (const [from, to, distance] of edges) {
    if (!adj[from]) {
      adj[from] = [];
    }
    if (!adj[to]) {
      adj[to] = [];
    }
    adj[from].push([to, distance]);
    adj[to].push([from, distance]);
  }  

  const getCount = (city) => {
    const minHeap = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    const visited = new Set();
    minHeap.enqueue([city, 0]);

    while (minHeap.size()) {
      const [currentCity, distance] = minHeap.dequeue();
      if (visited.has(currentCity)) {
        continue;
      }

      visited.add(currentCity);
      if (!adj[currentCity]) {
        continue;
      }
      
      for (const [neiCity, neiDistance] of adj[currentCity]) {
        const totalDistance = distance + neiDistance;
        if (totalDistance <= distanceThreshold) {
          minHeap.enqueue([neiCity, totalDistance]);
        }
      }
    }

    return visited.size - 1;
  }

  let minCity = 0;
  let minCount = +Infinity;
  for (let city = 0; city < n; ++city) {
    const count = getCount(city);
    if (count <= minCount) {
      minCount = count;
      minCity = city;
    }
  }

  return minCity;
};