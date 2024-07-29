/**
 * https://leetcode.com/problems/count-number-of-teams
 */

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let teams = 0;

  for (let mid = 1; mid < rating.length - 1; ++mid) {
    let less = 0;
    let more = 0;

    for (let left = 0; left < mid; ++left) {
      less += Number(rating[left] < rating[mid]);
    }

    for (let right = mid + 1; right < rating.length; ++right) {
      more += Number(rating[right] > rating[mid]);
    }

    teams += less * more;
    teams += (mid - less) * (rating.length - 1 - mid - more);
  }

  return teams;
};