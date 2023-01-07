/**
 * https://leetcode.com/problems/gas-station
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const gasSum = gas.reduce((acc, curr) => acc + curr, 0);
  const costSum = cost.reduce((acc, curr) => acc + curr, 0);
  if (gasSum < costSum) {
    return -1;
  }

  let tank = 0;
  let startIndex = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      startIndex = i + 1;
    }
  }
  return startIndex;
};