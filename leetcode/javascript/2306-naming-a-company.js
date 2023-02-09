/**
 * https://leetcode.com/problems/naming-a-company
 */

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
  const groups = {};
  for (const idea of ideas) {
    if (!groups[idea[0]]) {
      groups[idea[0]] = {};
    }
    groups[idea[0]][idea.slice(1)] = true;
  }

  let counter = 0;
  const chars = Object.keys(groups);
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (i === j) {
        continue;
      }

      const groupA = groups[chars[i]];
      const groupB = groups[chars[j]];
      let repeats = 0;
      for (const groupBWord of Object.keys(groupB)) {
        if (groupA[groupBWord]) {
          repeats++;
        }
      }
      counter += 2 * (Object.keys(groupA).length - repeats) * (Object.keys(groupB).length - repeats);
    }
  }
  return counter;
};