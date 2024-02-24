/**
 * https://leetcode.com/problems/find-all-people-with-secret
 */

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
  const adj = {};
  for (const [a, b, t] of meetings) {
    if (!adj[a]) adj[a] = [];
    if (!adj[b]) adj[b] = [];
    adj[a].push([b, t]);
    adj[b].push([a, t]);
  }

  const queue = [[0, 0], [firstPerson, 0]];
  const earliest = new Array(n);
  earliest[0] = 0;
  earliest[firstPerson] = 0;

  while (queue.length) {
    const [person, time] = queue.shift();
    for (const [nextPerson, nextTime] of adj[person] ?? []) {
      if (nextTime >= time && (earliest[nextPerson] === undefined || earliest[nextPerson] > nextTime)) {
        earliest[nextPerson] = nextTime;
        queue.push([nextPerson, nextTime]);
      }
    }
  }

  return earliest.reduce((acc, curr, index) => {
    if (curr !== undefined) acc.push(index);
    return acc;
  }, []);
};