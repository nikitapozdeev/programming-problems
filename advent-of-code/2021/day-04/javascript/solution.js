const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8');
const arr = input.split('\n\n');

class Board {
  cells = [];

  constructor(data) {
    this.makeCells(data);
  }

  makeCells(data) {
    const rows = data.split('\n');
    for (let row of rows) {
      const cols = row
        .split(/\s+/)
        .filter(value => value !== '')
        .map(value => new Cell(value));

      this.cells.push(cols);
    }
  }

  mark(num) {
    for (let row = 0; row < this.cells.length; row++) {
      for (let col = 0; col < this.cells[row].length; col++) {
        const cell = this.cells[row][col];
        if (cell.value === num && !cell.isMarked) {
          cell.mark();
        }
      }
    }
  }

  get isFilled() {
    // check rows
    for (let row = 0; row < this.cells.length; row++) {
      const rows = [];
      for (let col = 0; col < this.cells[row].length; col++) {
        rows.push(this.cells[row][col]);
      }

      if (rows.every(cell => cell.isMarked)) {
        return true;
      }
    }

    // check columns
    for (let col = 0; col < this.cells[0].length; col++) {
      const cols = []
      for (let row = 0; row < this.cells.length; row++) {
        cols.push(this.cells[row][col]);
      }

      if (cols.every(cell => cell.isMarked)) {
        return true;
      }
    }
    return false;
  }

  get unmarkedSum() {
    let sum = 0;
    for (let row = 0; row < this.cells.length; row++) {
      for (let col = 0; col < this.cells[row].length; col++) {
        const cell = this.cells[row][col];
        if (!cell.isMarked) {
          sum += cell.value;
        }
      }
    }
    return sum;
  }
}

class Cell {
  value = null;
  marked = false;

  constructor(value) {
    this.value = Number(value);
  }

  mark() {
    this.marked = true;
  }

  get isMarked() {
    return this.marked;
  }
}


// construct number
const numbers = arr[0].split(',').map(Number);

// part one
{
  // construct boards
  const boards = [];
  for (let i = 1; i < arr.length; i++) {
    const board = new Board(arr[i]);
    boards.push(board);
  }

  let wonNumber;
  let wonBoard;
  outerLoop:
    for (let num of numbers) {
      for (let board of boards) {
        board.mark(num);
        if (board.isFilled) {
          wonBoard = board;
          wonNumber = num;
          break outerLoop;
        }
      }
    }

  console.log(`Final score is ${wonNumber * wonBoard.unmarkedSum}`);
}

// part two
{
  // construct boards
  let boards = [];
  for (let i = 1; i < arr.length; i++) {
    const board = new Board(arr[i]);
    boards.push(board);
  }

  let lastWonNumber;
  let lastWonBoard;
  outerLoop:
    for (let num of numbers) {
      boards = boards.filter(board => !board.isFilled);
      for (let board of boards) {
        board.mark(num);
        if (board.isFilled) {
          lastWonBoard = board;
          lastWonNumber = num;
        }
      }
    }

  console.log(`Final score is ${lastWonNumber * lastWonBoard.unmarkedSum}`);
}

