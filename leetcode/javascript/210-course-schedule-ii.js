/**
 * https://leetcode.com/problems/course-schedule-ii
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const courses = [];
  const courseDependencies = {};

  // build course -> dependecies map
  for (let i = 0; i < numCourses; i++) {
    courseDependencies[i] = [];
  }

  for (const [course, dependecy] of prerequisites) {
    courseDependencies[course].push(dependecy);
  }

  const cycle = new Set();
  const visited = new Set();

  const dfs = (course) => {
    if (cycle.has(course)) {
      return false;
    }

    if (visited.has(course)) {
      return true;
    }

    cycle.add(course);
    visited.add(course);
    for (const dependency of courseDependencies[course]) {
      if (!dfs(dependency)) {
        return false;
      }
    }
    cycle.delete(course);
    courses.push(course);

    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return [];
    }
  }

  return courses;
};