/**
 * https://leetcode.com/problems/dota2-senate
 */

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const len = senate.length;
  const rQueue = [];
  const dQueue = [];
  for (let i = 0; i < len; i++) {
    if (senate[i] === "R") {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }
  
  while (rQueue.length && dQueue.length) {
    const r = rQueue.shift();
    const d = dQueue.shift();
    if (r < d) {
      rQueue.push(r + len);
    } else {
      dQueue.push(d + len);
    }
  }

  if (rQueue.length > 0) {
    return "Radiant";
  }

  return "Dire";
};