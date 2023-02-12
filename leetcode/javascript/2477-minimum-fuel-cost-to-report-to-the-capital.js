/**
 * https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital
 */

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  const citiesCount = roads.length + 1;
  if (citiesCount < 1) {
    return citiesCount;
  }

  const adj = [...new Array(citiesCount)].map(() => []);
  const neighborsCounts = new Array(citiesCount).fill(0);

  for (const [from, to] of roads) {
    adj[from].push(to);
    adj[to].push(from);
    neighborsCounts[from]++;
    neighborsCounts[to]++;
  }

  const queue = [];
  for (let i = 1; i < citiesCount; i++) {
    if (neighborsCounts[i] === 1) {
      queue.push(i);
    }
  }

  const peoples = new Array(citiesCount).fill(1);
  let fuel = 0;

  while (queue.length > 0) {
    const city = queue.shift();
    fuel += Math.ceil(peoples[city] / seats);
    for (const nextCity of adj[city]) {
      neighborsCounts[nextCity]--;
      peoples[nextCity] += peoples[city];
      if (nextCity !== 0 && neighborsCounts[nextCity] === 1 && city !== nextCity) {
        queue.push(nextCity)
      }
    }
  }

  return fuel;
};