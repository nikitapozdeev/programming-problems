/**
 * https://leetcode.com/problems/crawler-log-folder
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let level = 0;
  for (const operation of logs) {
    if (operation === './') {
      continue;
    }

    if (operation === '../') {
      level -= Number(level !== 0);
    } else {
      level++;
    }
  }

  return level;
};