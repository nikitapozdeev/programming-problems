/** 
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
 */

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = +Infinity;
  let max = -Infinity;
  let total = 0;
  for (const s of salary) {
    min = Math.min(min, s);
    max = Math.max(max, s);
    total += s;
  }

  return (total - min - max) / (salary.length - 2);
};