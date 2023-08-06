/**
 * https://leetcode.com/problems/number-of-music-playlists
 */

/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
  const cache = {};
  const modulo = 1e9 + 7;

  const dfs = (currentGoal, usedSongs) => {
    if (currentGoal === 0 && usedSongs === n) {
      return 1;
    }

    if (currentGoal === 0 || usedSongs > n) {
      return 0;
    }

    const cacheKey = `${currentGoal}:${usedSongs}`;
    if (cacheKey in cache) {
      return cache[cacheKey];
    }

    let count = (dfs(currentGoal - 1, usedSongs + 1) * (n - usedSongs)) % modulo;

    if (usedSongs > k) {
      count += (dfs(currentGoal - 1, usedSongs) * (usedSongs - k)) % modulo;
    }

    cache[cacheKey] = count;
    return cache[cacheKey];
  }

  return dfs(goal, 0);
};