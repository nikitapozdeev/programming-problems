/**
 * https://leetcode.com/problems/stone-game-iii
 */

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
  const cache = new Array(stoneValue.length);

  const turn = (i) => {
    if (i >= stoneValue.length) {
      return 0;
    }

    if (cache[i] !== undefined) {
      return cache[i];
    }

    let max = -Infinity;
    let sum = 0;

    for (let x = 1; x <= 3 && (i + x - 1) < stoneValue.length; x++) {
      sum += stoneValue[i + x - 1];
      max = Math.max(max, sum - turn(i + x));
    }

    cache[i] = max;
    return cache[i];
  }
  
  return turn(0) > 0 
    ? "Alice" 
    : turn(0) < 0 
        ? "Bob" 
        : "Tie";
};