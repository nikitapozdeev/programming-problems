function scan(dungeon) {
  const result = {
    ceil: 0,
    floor: 0,
    both: 0
  };
  const rows = dungeon.length;
  if (rows === 0) {
    return result;
  }

  const cols = dungeon[0].length;
  if (cols === 0) {
    return result;
  }
  const seen = {};
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  const bfs = (row, col) => {
    let kind = row === 0 
      ? 'ceil'
      : 'floor';
    
    const queue = [[row, col]];
    seen[`${row}-${col}`] = true;
    
    while (queue.length) {
      const [r, c] = queue.shift();
      for (const [dx, dy] of directions) {
        const dr = r + dx;
        const dc = c + dy;
        if (dr < 0 || dr >= rows || dc < 0 || dc >= cols) {
          continue;
        }

        if (dungeon[dr][dc] === 1 && !seen[`${dr}-${dc}`]) {
          if ((kind === 'floor' && dr === 0) || (kind === 'ceil' && dr === rows - 1)) {
            kind = 'both'
          }
          queue.push([dr, dc]);
          seen[`${dr}-${dc}`] = true;
        }
      }
    }
    return kind;
  }

  for (const row of [0, rows - 1]) {
    for (let col = 0; col < cols; col++) {
      if (dungeon[row][col] === 1 && !seen[`${row}-${col}`]) {
        result[bfs(row, col)]++;
      }
    }
  }

  return result;
}

module.exports = { scan };