/**
 * https://leetcode.com/problems/smallest-sufficient-team
 */

/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  const peopleCount = people.length;
  const skillsCount = req_skills.length;
  const skillIdMap = {};

  for (let i = 0; i < skillsCount; i++) {
    skillIdMap[req_skills[i]] = i;
  }

  const personSkills = new Array(peopleCount).fill(0);
  for (let i = 0; i < peopleCount; i++) {
    for (const skill of people[i]) {
       personSkills[i] |= 1 << skillIdMap[skill];
    }
  }

  const dp = new Array(2 ** skillsCount).fill(BigInt(2 ** peopleCount) - 1n);
  dp[0] = 0;

  for (let i = 1; i < 2 ** skillsCount; i++) {
    for (let j = 0; j < peopleCount; j++) {
      smallerSkills = i & ~personSkills[j];
      if (smallerSkills !== i) {
        const peopleSet = BigInt(dp[smallerSkills]) | BigInt(2 ** j);
        if (countBits(peopleSet) < countBits(dp[i])) {
          dp[i] = peopleSet;
        }
      }
    }
  }

  const answerSet = dp[(2 ** skillsCount) - 1];
  const answer = [];

  for (let i = 0; i < peopleCount; i++) {
    if ((answerSet >> BigInt(i)) & 1n) {
      answer.push(i);
    }
  }

  return answer;
};

function countBits(number) {
  return (number.toString(2).match(/1/g) || []).length;
}