/**
 * https://leetcode.com/problems/count-all-possible-routes
 */

/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
  const mod = 1e9 + 7;
  const cache = {};

  const dfs = (city, remainingFuel) => {
    if (remainingFuel < 0) {
      return 0;
    }

    const cacheKey = `${city}:${remainingFuel}`;
    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    let answer = 0;
    if (city === finish) {
      answer = 1;
    }

    for (let i = 0; i < locations.length; i++) {
      if (i === city) {
        continue;
      }

      answer = (answer + dfs(i, remainingFuel - Math.abs(locations[city] - locations[i]))) % mod;
    }

    cache[cacheKey] = answer;
    return answer;
  }

  return dfs(start, fuel);
};