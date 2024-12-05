/**
 * https://leetcode.com/problems/move-pieces-to-obtain-a-string
 */

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
  let si = 0;
  let ti = 0;
  let ii = 0;

  while (si < start.length || ti < target.length) {
    while (si < start.length && start[si] === '_') {
      si++;
    }

    while (ti < target.length && target[ti] === '_') {
      ti++;
    }

    if (si === start.length || ti === target.length) {
      return si === start.length && ti === target.length;
    }

    if (start[si] !== target[ti] || 
       (start[si] === 'L' && si < ti) ||
       (start[si] === 'R' && si > ti)) {
      return false;
    }

    si++;
    ti++;
  }

  return true;
};