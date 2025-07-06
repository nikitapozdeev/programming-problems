/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const counter = {};
    for (const num of arr) {
        counter[num] = (counter[num] || 0) + 1;
    }

    let max = -1;
    for (const [num, count] of Object.entries(counter)) {
        if (Number(num) === count) {
            max = Math.max(max, count);
        }
    }

    return max;
};