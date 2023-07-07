/**
 * https://leetcode.com/problems/maximize-the-confusion-of-an-exam
 */

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let left = 0;
  let max = 0;
  const count = { 'T': 0, 'F': 0};

  for (let right = 0; right < answerKey.length; right++) {
    count[answerKey[right]]++;

    while (Math.min(count['T'], count['F']) > k) {
      count[answerKey[left]]--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};