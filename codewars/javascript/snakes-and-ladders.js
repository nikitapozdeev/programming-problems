/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/587136ba2eefcb92a9000027
  Instructions: 
    Introduction
    Snakes and Ladders is an ancient Indian board game regarded today as a worldwide 
    classic. It is played between two or more players on a gameboard having numbered, 
    gridded squares. A number of "ladders" and "snakes" are pictured on the board, 
    each connecting two specific board squares. (Source Wikipedia)

    Task
    Your task is to make a simple class called SnakesLadders. 
    The test cases will call the method play(die1, die2) independantly of the state 
    of the game or the player turn. The variables die1 and die2 are the die thrown in 
    a turn and are both integers between 1 and 6. The player will move the sum of die1 
    and die2.
    
    Rules
      1.  There are two players and both start off the board on square 0.
      2.  Player 1 starts and alternates with player 2.
      3.  You follow the numbers up the board in order 1=>100
      4.  If the value of both die are the same then that player will have another go.
      5.  Climb up ladders. The ladders on the game board allow you to move upwards and 
          get ahead faster. If you land exactly on a square that shows an image of the bottom 
          of a ladder, then you may move the player all the way up to the square at the top 
          of the ladder. (even if you roll a double).
      6.  Slide down snakes. Snakes move you back on the board because you have to slide 
          down them. If you land exactly at the top of a snake, slide move the player all 
          the way to the square at the bottom of the snake or chute. (even if you roll a 
          double).
      7.  Land exactly on the last square to win. The first person to reach the highest 
          square on the board wins. But there's a twist! If you roll too high, your 
          player "bounces" off the last square and moves back. You can only win by 
          rolling the exact number needed to land on the last square. For example, if 
          you are on square 98 and roll a five, move your game piece to 100 (two moves), 
          then "bounce" back to 99, 98, 97 (three, four then five moves.)
      8.  If the Player rolled a double and lands on the finish square “100” without any 
          remaining moves then the Player wins the game and does not have to roll again.
    
    Returns
      Return Player n Wins!. Where n is winning player that has landed on square 100 
      without any remainding moves left.

      Return Game over! if a player has won and another player tries to play.

      Otherwise return Player n is on square x. Where n is the current player and x is 
      the sqaure they are currently on.
      Good luck and enjoy!    
*/

class Player {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
}

class SnakesLadders {
  constructor() {
    this.players = [
      new Player('Player 1'),
      new Player('Player 2')
    ];
    this.ladders = [
      { bot: 2, top: 38 },
      { bot: 7, top: 14 },
      { bot: 8, top: 31 },
      { bot: 15, top: 26 },
      { bot: 21, top: 42 },
      { bot: 28, top: 84 },
      { bot: 36, top: 44 },
      { bot: 51, top: 67 },
      { bot: 78, top: 98 },
      { bot: 71, top: 91 },
      { bot: 87, top: 94 }
    ];
    this.snakes = [
      { head: 16, tail: 6 },
      { head: 46, tail: 25 },
      { head: 49, tail: 11 },
      { head: 62, tail: 19 },
      { head: 64, tail: 60 },
      { head: 74, tail: 53 },
      { head: 89, tail: 68 },
      { head: 92, tail: 88 },
      { head: 95, tail: 75 },
      { head: 99, tail: 80 }
    ];
    [this.currentPlayer] = this.players;
    this.winner = null;
  }
  
  switchPlayer() {
    let currentIndex = this.players.indexOf(this.currentPlayer);
    currentIndex = currentIndex < this.players.length - 1
      ? currentIndex + 1
      : 0;
    this.currentPlayer = this.players[currentIndex];
  }
  
  getLadder(position) {
    return this.ladders.find(({ bot }) => bot === position);
  }
  
  getSnake(position) {
    return this.snakes.find(({ head }) => head === position);
  }
  
  get isGameOver() {
    return !!this.winner;
  }
  
  move(turns) {
    let nextPosition = this.currentPlayer.position + turns;
    if (nextPosition > 100) {
      const offset = nextPosition - 100;
      nextPosition = 100 - offset
    }
    this.currentPlayer.position = nextPosition;
    if (this.currentPlayer.position === 100) {
      this.winner = this.currentPlayer;
    }
  }
  
  climb(ladder) {
    this.currentPlayer.position = ladder.top;
  }
  
  slide(snake) {
    this.currentPlayer.position = snake.tail;
  }
  
  play(die1, die2) {
    if (this.isGameOver) { 
      return "Game over!";
    }
 
    this.move(die1 + die2);
    if (this.isGameOver) {
      return `${this.winner.name} Wins!`;
    }

    const ladder = this.getLadder(this.currentPlayer.position);
    if (ladder) {
      this.climb(ladder);
    }

    const snake = this.getSnake(this.currentPlayer.position);
    if (snake) {
      this.slide(snake);
    }
    
    const message = `${this.currentPlayer.name} is on square ${this.currentPlayer.position}`
   
    if (die1 !== die2) {
      this.switchPlayer()
    }
    
    return message;
  }
}