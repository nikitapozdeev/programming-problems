/**
 * https://leetcode.com/problems/robot-collisions
 */

/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
  const indeces = Array.from({ length: positions.length }, (_, i) => i);
  indeces.sort((a, b) => positions[a] - positions[b]);

  const stack = [];
  for (const index of indeces) {
    if (directions[index] === 'R') {
      stack.push(index);
    } else {
      while (stack.length && healths[index] > 0) {
        const left = index;
        const right = stack.pop();
        if (healths[left] < healths[right]) {
          healths[left] = 0;
          healths[right]--;
          stack.push(right);
        } else if (healths[right] < healths[left]) {
          healths[right] = 0;
          healths[left]--;
        } else {
          healths[left] = 0;
          healths[right] = 0;
        }
      }
    }
  }

  const output = [];
  for (let i = 0; i < indeces.length; ++i) {
    if (healths[i] > 0) {
      output.push(healths[i]);
    }
  }

  return output;
};