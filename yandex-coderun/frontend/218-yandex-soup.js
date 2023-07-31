module.exports = function (mapString) {
  const rows = mapString.split('\n');
  const rowsCount = rows.length;
  const colsCount = rows[0].length;
  const map = new Array(rows.length).fill().map(() => new Array(rows[0].length));
  const initialTime = 1;
  const holes = [];
  const chars = [];
  let charId = 0;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < colsCount; col++) {
      map[row][col] = rows[row][col];
      if ((row === 0 || row === (rowsCount - 1) || col === 0 || col === (colsCount - 1))  && 
        !Number.isNaN(parseInt(rows[row][col]))) {
        const holeNumber = parseInt(rows[row][col]);
        if ((row === 0 && col === 0) || 
            (row === 0 && col === (colsCount - 1)) ||
            (row === (rowsCount - 1) && col === 0) ||
            (row === (rowsCount - 1) && col === (colsCount - 1))) {
          continue;
        }
        holes.push([holeNumber, row, col]);
      } else if (rows[row][col] >= 'A' && rows[row][col] <= 'Z') {
        if (row === 0 || col === 0 || row === (rowsCount - 1) || col === (colsCount - 1)) {
          continue;
        }
        chars.push([charId++, row, col]);
      }
    }
  }

  if (holes.length === 0 || chars.length === 0) {
    return initialTime;
  }

  let maxTime = 0;
  const distances = {};
  for (const char of chars) {
    for (const hole of holes) {
      const dx = Math.abs(char[1] - hole[1]);
      const dy = Math.abs(char[2] - hole[2]);
      distances[char[0]] = Math.min((distances[char[0]] || +Infinity), dx + dy);
    }
    maxTime = Math.max(maxTime, distances[char[0]]);
  }
  return initialTime + maxTime;
}