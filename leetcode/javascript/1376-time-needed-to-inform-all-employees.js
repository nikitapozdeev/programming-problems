/**
 * https://leetcode.com/problems/time-needed-to-inform-all-employees
 */

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  const adj = [...new Array(n)].map(() => []);
  for (let i = 0; i < n; i++) {
    if (manager[i] >= 0) {
      adj[manager[i]].push(i);
    }
  }

  let totalTime = -Infinity;
  const queue = [[headID, 0]];
  while (queue.length) {
    const [id, time] = queue.shift();
    totalTime = Math.max(totalTime, time);
    for (const emp of adj[id]) {
      queue.push([emp, time + informTime[id]]);
    }
  }
  return totalTime;
};