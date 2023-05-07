/**
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position
 */

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  const len = obstacles.length;
  const answer = new Array(len);
  const lis = new Array(len);
  let lisLen = 0;

  const bisect = (heigth, right) => {
    if (right === 0) {
      return 0;
    }

    let left = 0;
    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (lis[mid] <= heigth) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  for (let i = 0; i < len; i++) {
    const height = obstacles[i];
    const index = bisect(height, lisLen);
    if (index === lisLen) {
      lisLen++;
    }

    lis[index] = height;
    answer[i] = index + 1;
  }

  return answer;
};