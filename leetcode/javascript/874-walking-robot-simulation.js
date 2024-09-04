/**
 * https://leetcode.com/problems/walking-robot-simulation
 */

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let x = 0;
  let y = 0;
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let d = 0;
  let max = 0;
  
  const obstaclesMap = {};
  for (const [x, y] of obstacles) {
    obstaclesMap[`x${x}:y${y}`] = true;
  }

  for (const command of commands) {
    if (command === -2) {
      d = (d + 3) % directions.length;
    } else if (command === -1) {
      d = (d + 1) % directions.length;
    } else {
      for (let i = 0; i < command; ++i) {
        const [dx, dy] = directions[d];
        const nx = x + dx;
        const ny = y + dy;
        if (obstaclesMap[`x${nx}:y${ny}`]) {
          break;
        }

        x = nx;
        y = ny;
      }
      max = Math.max(max, (x ** 2) + (y ** 2));
    }
  }

  return max;
};