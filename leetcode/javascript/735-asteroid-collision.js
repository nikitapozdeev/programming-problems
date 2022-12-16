/**
 * https://leetcode.com/problems/asteroid-collision
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];
  for (let asteroid of asteroids) {
    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      const diff = asteroid + stack[stack.length - 1];
      if (diff > 0) {
        asteroid = 0;
      } else if (diff < 0) {
        stack.pop();
      } else {
        asteroid = 0;
        stack.pop();
      }
    }

    if (asteroid) {
      stack.push(asteroid);
    }
  }

  return stack;
};