/**
 * https://leetcode.com/problems/find-all-groups-of-farmland
 */

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
  const farms = [];
  const rows = land.length;
  const cols = land[0].length;

  for (let row1 = 0; row1 < rows; row1++) {
    for (let col1 = 0; col1 < cols; col1++) {
      if (land[row1][col1]) {
        let row2 = row1;
        let col2 = col1;

        for (row2 = row1; row2 < rows && land[row2][col1]; row2++) {
          for (col2 = col1; col2 < cols && land[row2][col2]; col2++) {
            land[row2][col2] = 0;
          }
        }

        farms.push([row1, col1, row2 - 1, col2 - 1]);
      } 
    }
  }

  return farms;
};