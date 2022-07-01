/**
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  let total = 0;
  boxTypes.sort((a, b) => {
    [, unitA] = a;
    [, unitB] = b;
    return unitB - unitA;
  });
  
  for (let i = 0; i < boxTypes.length ; ++i) {
    const [num, units] = boxTypes[i];
    const taken = truckSize >= num ? num : truckSize;
    total += taken * units;
    truckSize -= taken;
    
    if (truckSize === 0) {
      break;
    }
  }

  return total;
};