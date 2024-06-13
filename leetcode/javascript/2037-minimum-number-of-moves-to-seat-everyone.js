/**
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone
 */

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let moves = 0;

  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }
  
  return moves;
};

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  let max = 0;
  for (let i = 0; i < seats.length; ++i) {
    max = Math.max(max, seats[i], students[i]);
  }

  const diff = new Array(max).fill(0);
  for (let i = 0; i < seats.length; ++i) {
    diff[seats[i] - 1]++;
    diff[students[i] - 1]--;
  }

  let moves = 0;
  let unmatched = 0;
  for (const d of diff) {
    moves += Math.abs(unmatched);
    unmatched += d;
  }

  return moves;
};