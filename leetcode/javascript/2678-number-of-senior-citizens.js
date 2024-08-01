/**
 * https://leetcode.com/problems/number-of-senior-citizens
 */

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  return details.reduce((count, person) => {
    return count += Number(Number(person[11]) * 10 + Number(person[12]) > 60)
  }, 0);
};