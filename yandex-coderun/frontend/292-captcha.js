function solveCaptcha(captcha) {
  const rows = captcha.split('\n');
  const rowsCount = rows.length;
  const colsCount = rows[0].length;
  const grid = new Array(rowsCount).fill().map(() => new Array(colsCount));

  const originalGrid = new Array(rowsCount).fill().map(() => new Array(colsCount));
  for (let r = 0; r < rowsCount; r++) {
    for (let c = 0; c < colsCount; c++) {
      originalGrid[r][c] = rows[r][c];
    }
  }

  let signs = 0;
  const signsArr = [];
  for (let r = 0; r < rowsCount; r++) {
    for (let c = 0; c < colsCount; c++) {
      grid[r][c] = rows[r][c];
      if (grid[r][c] >= 'A' && grid[r][c] <= 'Z') {
        if (grid[r][c] === 'S') {
          signs++;
          signsArr.push([r, c]);
        }
      }
    }
  }

  const area = (rowsCount * colsCount) / signs;
  const slices = [];

  const isValidSlice = (startRow, startCol, endRow, endCol) => {
    if (startRow >= rowsCount || endRow >= rowsCount || startCol >= colsCount || endCol >= colsCount) {
      return false;
    }
    
    const sliceArea = (endRow + 1 - startRow) * (endCol + 1 - startCol);

    if (sliceArea < area) {
      return false;
    }

    let signs = 0;
    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        if (grid[r][c] === 1) {
          return false;
        }
        if (grid[r][c] === 'S') {
          signs++;
          if (signs > 1) {
            return false;
          }
        }
      }
    }
    return signs === 1;
  }

  const occupyRect = (r, c, w, h) => {
    slices.push([r, c, r + h - 1, c + w - 1]);
    for (let row = r; row < r + h; row++) {
      for (let col = c; col < c + w; col++) {
        grid[row][col] = 1;
      }
    }
  }

  const deoccupyRect = () => {
    if (slices.length === 0) {
      return;
    }

    const lastSlice = slices.pop();
    const [r, c, re, ce] = lastSlice;
    for (let row = r; row <= re; row++) {
      for (let col = c; col <= ce; col++) {
        grid[row][col] = originalGrid[row][col];
      }
    }
  }

  const findTopLeftCell = () => {
    for (let r = 0; r < rowsCount; r++) {
      for (let c = 0; c < colsCount; c++) {
        if (grid[r][c] !== 1) {
          return [r, c];
        }
      }
    }
  }

  const sizes = getPossibleRectSizes(area);

  const dfs = (r, c) => {
    let found = false;
    for (const [w, h] of sizes) {
      if (isValidSlice(r, c, r + h - 1, c + w - 1)) {
        occupyRect(r, c, w, h);
        console.table(grid)
        const nextCell = findTopLeftCell();
        if (!nextCell) {
          found = true;
          return true;
        }
        if (!dfs(nextCell[0], nextCell[1])) {
          continue;
        } else {
          return true;
        }
      }
    }

    if (!found) {
      deoccupyRect()
      return false;
    }
  }
  
  dfs(0, 0);

  if (slices.length < signs) {
    return [];
  }

  slices.sort((a, b) => a[0] < b[0] && a[1] < b[1]);

  const output = [];
  for (const [sr, sc, er, ec] of slices) {
    const rows = []
    for (let r = sr; r <= er; r++) {
      const row = [];
      for (let c = sc; c <= ec; c++) {
        row.push(originalGrid[r][c]);
      }
      rows.push(row.join(''));
    }
    output.push(rows.join('\n'));
  }
  return output;
}

function getPossibleRectSizes(area) {
  const sizes = [];

  for (let i = 1; i <= area; i++) {
    if (area % i === 0) {
      sizes.push([area / i, i]);
    }
  }

  return sizes;
}

// const test1 = solveCaptcha(
// `TRABWARH
// THSCAHAW
// WWBSCWAA
// CACACHCR`
// );
// console.assert(test1.length === 2 && test1.every((slice, index) => slice === 
// [`TRABWARH
// THSCAHAW`
// ,
// `WWBSCWAA
// CACACHCR`][index]));

// const test2 = solveCaptcha(
// `TRABWARH
// THSCAHSW
// WWBCCWAA
// CACACHCR`
// );

// console.assert(test2.length === 2 && test2.every((slice, index) => slice === 
// [`TRAB
// THSC
// WWBC
// CACA`
// ,
// `WARH
// AHSW
// CWAA
// CHCR`][index]));

// const test3 = solveCaptcha(
// `TRABWARH
// THSCAHWW
// WWBCCWAA
// CACACHCR`
// );

// console.assert(test3.length === 1 && test3.every((slice, index) => slice === 
// [`TRABWARH
// THSCAHWW
// WWBCCWAA
// CACACHCR`][index]))

// const test4 = solveCaptcha(
// `TRABWARH
// THSCAHWW
// WWBCCWAA
// CACACHCR`
// );

// console.assert(test4.length === 1 && test4.every((slice, index) => slice === 
// [`TRABWARH
// THSCAHWW
// WWBCCWAA
// CACACHCR`][index]));

// const test5 = solveCaptcha(
// `TRABWARHH
// THSCAHASH
// WWBCCWAAH
// CACACHCRH`
// );

// console.assert(test5.length === 0);

// const test6 = solveCaptcha(
// `TRABWARH
// TSSCAHWW
// WWBCCWAA
// CACACHCR`);

// console.assert(test6.length === 0)

// const test7 = solveCaptcha(
// `SXXS
// XXXX
// XXXX
// SXXS`
// );
  
// console.assert(test7.length === 4 && test7.every((slice, index) => slice === 
// [
// `SX
// XX`,
// `XX
// SX`,
// `XS
// XX`,
// `XX
// XS`][index]));


// const test8 = solveCaptcha(
// `XSSX
// XXXX
// XXXX
// XSSX`
// );

// console.assert(test8.length === 4 && test8.every((slice, index) => slice === 
// [
// `XS
// XX`,
// `XX
// XS`,
// `SX
// XX`,
// `XX
// SX`][index]));

// const test9 = solveCaptcha(
// `SXXS
// XXXX
// SXXX
// SXXX`
// );

// console.assert(test9.length === 4 && test9.every((slice, index) => slice === 
// [
// `SX
// XX`,
// `SXXX`,
// `SXXX`,
// `XS
// XX`][index]));

// const test10 = solveCaptcha(
// `SXXS
// XXXX
// SXXX
// XXXS`
// );

// console.assert(test10.length === 4 && test10.every((slice, index) => slice === 
// [
// `SX
// XX`,
// `SXXX`,
// `XXXS`,
// `XS
// XX`,
// ][index]))

// const test11 = solveCaptcha(
// `SXX
// XSX
// XXS`
// );

// console.assert(test11.length === 3 && test11.every((slice, index) => slice === 
// [
// `SXX`,
// `XSX`,
// `XXS`][index]));

// const test12 = solveCaptcha(
// `SX
// SX`
// );
// console.assert(test12.length === 2 && test12.every((slice, index) => slice === 
// [
// `SX`,
// `SX`][index]));

// const test13 = solveCaptcha(
// `SS
// XX`
// );

// console.assert(test13.length === 2 && test13.every((slice, index) => slice === 
// [
// `S
// X`,
// `S
// X`][index]));

// const test14 = solveCaptcha(
// `SXXS
// XSXX
// XXSX
// XXXX`
// );

// console.assert(test14.length === 4 && test14.every((slice, index) => slice === 
// [
// `S
// X
// X
// X`,
// `XX
// SX`,
// `XS
// XX`,
// `S
// X
// X
// X`
// ][index]));

const test15 = solveCaptcha(
`WWWWWWWW
WWWSWWWW
SWWWWWSW
WWWWWSWW
WWWWWWWW
WWWSWWWW
WSWWWWSW
WWWSWWWW`
)

console.assert(test15.length === 8 && test15.every((slice, index) => slice === 
[
`WWWW
WWWS`,
`SWWW
WWWW`,
`WW
WW
WS
WW`,
`WWWW
WSWW`,
`WWWW
WSWW`,
`WW
WW
WW
WS`,
`WW
WW
SW
WW`,
`WW
WW
SW
WW`
][index]), 15);

console.log(test15)

// const test16 = solveCaptcha(
// `SXXX
// XSXX
// XXSX
// XSXX`);

// console.assert(test16.length === 4 && test16.every((slice, index) => slice === 
// [
// `SXXX`,
// `XSXX`,
// `XXSX`,
// `XSXX`
// ][index]), 16);

console.log(solveCaptcha(
`SX
XX`))