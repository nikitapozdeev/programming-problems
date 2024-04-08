/**
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch
 */

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let sum = students.reduce((total, curr) => total + curr);
  const count = {
    0: students.length - sum,
    1: students.length - (students.length - sum)
  }
  
  for (const s of sandwiches) {
    if (count[s]) {
      count[s]--;
    } else {
      break;
    }
  }

  return count[0] + count[1];
};