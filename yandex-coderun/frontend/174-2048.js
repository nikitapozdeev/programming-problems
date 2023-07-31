module.exports = function solution(field, moves) {
  const SIZE = 4;

  const getNearest = (startRow, endRow, startCol, endCol) => {
    if (startRow < endRow) {
      for (let row = startRow; row < endRow; row++) {
        if (startCol < endCol) {
          for (let col = startCol; col < endCol; col++) {
            if (field[row][col] !== 0) {
              return [row, col];
            }
          }
        } else {
          for (let col = startCol; col > endCol; col--) {
            if (field[row][col] !== 0) {
              return [row, col];
            }
          }
        }
      }
    } else {
      for (let row = startRow; row > endRow; row--) {
        if (startCol < endCol) {
          for (let col = startCol; col < endCol; col++) {
            if (field[row][col] !== 0) {
              return [row, col];
            }
          }
        } else {
          for (let col = startCol; col > endCol; col--) {
            if (field[row][col] !== 0) {
              return [row, col];
            }
          }
        }
      }
    }
  }

  const mergeCells = (src, dest) => {
    const [srow, scol] = src;
    const [drow, dcol] = dest;
    if (field[srow][scol] === 0 || field[srow][scol] === field[drow][dcol]) {
      field[srow][scol] += field[drow][dcol];
      field[drow][dcol] = 0;
    } 
  }

  const swipeLeft = () => {
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        const nearest = getNearest(row, row + 1, col + 1, SIZE);
        if (!nearest) {
          continue;
        }

        const oldValue = field[row][col];
        mergeCells([row, col], nearest);
        if (oldValue === 0) {
          col--;
        } 
      }
    }
  }

  const swipeRight = () => {
    for (let row = 0; row < SIZE; row++) {
      for (let col = SIZE - 1; col > 0; col--) {
        const nearest = getNearest(row, row + 1, col - 1, -1);
        if (!nearest) {
          continue;
        }

        const oldValue = field[row][col];
        mergeCells([row, col], nearest);
        if (oldValue === 0) {
          col++;
        } 
      }
    }
  }

  const swipeUp = () => {
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        const nearest = getNearest(row + 1, SIZE, col, col + 1);
        if (!nearest) {
          continue;
        }

        const oldValue = field[row][col];
        mergeCells([row, col], nearest);
        if (oldValue === 0) {
          col--;
        } 
      }
    }
  }

  const swipeDown = () => {
    for (let row = SIZE - 1; row > 0; row--) {
      for (let col = 0; col < SIZE; col++) {
        const nearest = getNearest(row - 1, -1, col, col + 1);
        if (!nearest) {
          continue;
        }

        const oldValue = field[row][col];
        mergeCells([row, col], nearest);
        if (oldValue === 0) {
          col--;
        } 
      }
    }
  }

  for (const move of moves.split(' ')) {
    if (move === 'U') {
      swipeUp();
    } else if (move === 'D') {
      swipeDown();
    } else if (move === 'L') {
      swipeLeft();
    } else if (move === 'R') {
      swipeRight();
    }
  }

  return field;
}