/**
 * https://leetcode.com/problems/second-minimum-time-to-reach-destination
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }

  const queue = [1];
  const visitTimes = Array.from({ length: n + 1 }, () => []);
  let currentTime = 0;
  let secondPass = false;

  while (queue.length) {
    const steps = queue.length;
    
    for (let i = 0; i < steps; ++i) {
      const node = queue.shift();
      
      if (node === n) {
        if (secondPass) {
          return currentTime;
        }
        secondPass = true;
      }

      for (const nei of adj[node]) {
        const neiTimes = visitTimes[nei];
        if (!neiTimes.length || (neiTimes.length === 1 && neiTimes[0] !== currentTime)) {
          neiTimes.push(currentTime);
          queue.push(nei);
        }
      }
    }

    if (Math.trunc(currentTime / change) % 2 === 1) {
      currentTime += change - (currentTime % change);
    }
    currentTime += time;
  }
};