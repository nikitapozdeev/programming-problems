/**
 * https://leetcode.com/problems/course-schedule
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const adj = new Array(numCourses).fill().map(() => []);
  for (const [a, b] of prerequisites) {
    adj[a].push(b);
  }

  const seen = {};

  const dfs = (course) => {
    if (seen[course]) {
      return false;
    }

    if (adj[course].lenght === 0) {
      return true;
    }

    seen[course] = true;
    for (const prerequisite of adj[course]) {
      if (!dfs(prerequisite)) {
        return false;
      }
    }
    seen[course] = false;
    adj[course] = [];

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};