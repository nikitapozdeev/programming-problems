/**
 * https://leetcode.com/problems/open-the-lock/
 */

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const seen = {};
  for (const deadend of deadends) {
    if (deadend === '0000') {
      return -1;
    }
    seen[deadend] = true;
  }
  
  const moves = (lock) => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(`${lock.slice(0, i)}${(Number(lock[i]) + 1) % 10}${lock.slice(i + 1)}`);
      result.push(`${lock.slice(0, i)}${(Number(lock[i]) - 1 + 10) % 10}${lock.slice(i + 1)}`);
    }
    return result;
  }
  
  const queue = [['0000', 0]];
  while (queue.length > 0) {
    const [lock, turns] = queue.shift();
    if (lock === target) {
      return turns;
    }
    
    for (const move of moves(lock)) {
      if (!seen[move]) {
        seen[move] = true;
        queue.push([move, turns + 1]);
      }
    }
  }
  
  return -1;
};