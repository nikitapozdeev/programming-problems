/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/586c0909c1923fdb89002031
  Instructions: 
    Introduction
      We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. 
      Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games
    
    Connect 4
      Task
      The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. 
      The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

    Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
   
    Rules
      If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

      If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

      If the game has been won by a player, any following moves should return ”Game has finished!”.

      Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
      
      Player 1 starts the game every time and alternates with player 2.

      The columns are numbered 0-6 left to right.
      Good luck and enjoy!
*/

// TODO: refactoring checks functions
class Connect4 {
  constructor() {
    this.rows = 6;
    this.cols = 7;
    this.makeGrid();
    this.playerA = 1;
    this.playerB = 2;
    this.currentPlayer = this.playerA;
    this.gameOver = false;
  }
  
  makeGrid() {
    this.grid = [];
    for (let row = 0; row < this.rows; row++) {
      this.grid.push([]);
      for (let col = 0; col < this.cols; col++) {
        this.grid[row][col] = 0;
      }
    }
  }
  
  checkRows() {
    for (let row = 0; row < this.rows; row++) {
      let count = 0;
      for (let col = 0; col < this.cols; col++) {
        if (this.grid[row][col] === this.currentPlayer) {
          count++;
        } else {
          count = 0;
        }

        if (count === 4) {
          return true;
        }
      }
    }
     
    return false;
  }
  
  checkCols() {
    for (let col = 0; col < this.cols; col++) {
      let count = 0;
      for (let row = 0; row < this.rows; row++) {
        if (this.grid[row][col] === this.currentPlayer) {
          count++;
        } else {
          count = 0;
        }

        if (count === 4) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  checkDiagonal() {
    for (let d = 0; d < this.rows + this.cols - 1; d++) {
      let counter = 0;
      for (let row = this.rows - 1; row >= 0; --row) {
          let col = d - row;
          if (col >= 0 && col < this.cols) {
              if (this.grid[row][col] === this.currentPlayer) {
                counter++;  
              } else {
                counter = 0
              }
          }
        
          if (counter === 4) {
            return true;
          }
      }
    }
    
    for (let d = 0; d < this.rows + this.cols - 1; d++) {
      let counter = 0;
      for (let row = this.rows - 1; row >= 0; --row) {
          let col = d - (this.rows - row);
          if (col >= 0 && col < this.cols) {
              if (this.grid[row][col] === this.currentPlayer) {
                counter++;  
              } else {
                counter = 0
              }
          }
        
          if (counter === 4) {
            return true;
          }
      }
    }
        
    return false;
  }
  
  check4() {
    return this.checkRows() || this.checkCols() || this.checkDiagonal();
  }
  
  isFull(col) {
    return this.grid[0][col] !== 0;
  }
  
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.playerA 
      ? this.playerB
      : this.playerA;
  }
  
  placeDisc(col) {
    for (let i = this.rows - 1; i >= 0; i--) {
      if (this.grid[i][col] === 0) {
        this.grid[i][col] = this.currentPlayer;
        break;
      }  
    }
  }
  
  play(col) {
    if (this.gameOver) {
      return 'Game has finished!';  
    }
    
    if (this.isFull(col)) {
      return 'Column full!';
    }
    
    this.placeDisc(col);
    if (this.check4()) {
      this.gameOver = true;
      return `Player ${this.currentPlayer} wins!`;
    } 
    
    const message = `Player ${this.currentPlayer} has a turn`;
    this.switchPlayer();
    
    return message;
  }
}