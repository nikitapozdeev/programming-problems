/*
  Level: 4 kyu
  Link: https://www.codewars.com/kata/5977b5bcfd72c6a99f0000c4
  Instructions: 
    Introduction
      Robozzle is a puzzle game which requires the player to write programs to get a robot through a maze, collecting all stars on it.

      The best way to understand the game is probably to play it, please have a try on http://www.robozzle.com/

      Your ultimate goal in the life is now to write a Robozzle simulator.

      The task
      You'll write a robozzle function which will take the board, the robot initial state and the program in paramters.

      The board will be a 2 dimensions array containing cells. A cell is a Hash containing 2 elements:

      color: the color of the cell (one of blue, green or red)
      star: a boolean indicating if the cell contains a star
      The robot will be a Hash containing the following elements:

      x: the x position of the robot on the board
      y: the y position on the roboat board
      direction: one of right, left, up, down
      Coordinates start at 0; 0 at the top left, the y axix goes "down" and the x axis goes to the "right", so if the robot is moving down, it's y coordinate will increase.

      The program will be an array of subprograms, containing at least one subprogram. Each subprogram is a list of actions, an action is a hash containing the following elements:

      action: the instruction to perform (see below for the possible instructions)
      if (optional): the color condition to perform the action (see "conditionals")
      Your simulator will run turn by turn, until the end of the game, popping an action from the stack and executing it.

      At the end of the game (see "end of the game" section), you will return a 2 elements array containg the final state of the board and the final state of the robot.

      Your function might need to abort prematurely if there is an error (see "end of the game")

    Instructions
      Your simulator will support the following instructions:

      forward: move the robot 1 cell forward, following it's current direction
      turn_right: turn the robot to the right
      turn_left: turn the robot to the left
      paint_blue: change the color of the current cell to blue
      paint_green: change the color of the current cell to green
      paint_red: change the color of the current cell to red
      an integer: stack the instructions of the subprogram at the integer's index in the given program
      Conditionals
      Actions can be conditional, meaning they will be executed only if the current cell is of the same color as their if element.

      If an action does not fulfil the conditional, it's skipped.

    The stack
      Your simulator will use a stack to store the instructions to execute. You will initialize it with the instructions of the first subprogram.

      The stack is Last-in, First-out, that means the last inserted instruction will be executed next.

      Each turn, you'll have to pop the most recently inserted action from the stack and execute it.

      Please note the subprogams are meant to be executed in the same order as given, so take care when putting their instructions on the stack.

    End of the game
      The game ends when the robot has collected all the stars on the board or if an error occurs.

      You have to take care of the following errors:

      There is no more instructions to execute on the stack
      The robot moved out of the board (either outside of the board array boudaries or on a nil cell)
      You have to raise an exception to signal it with a meaningful error message if any errors occurs.

    Other remarks
      The requirements might be harder to understand if you haven't yet play the game (and the game is really fun to play, you should really give it a try).

      I have included 2 sample puzzles in the test cases so you can check how the simulator is expected to work, especially about dealing with the inputs and outputs.

      Feel free to let me know in the comments if anything is unclear or if there is an issue with the Kata.

  Happy coding!
*/

const directions = ['up', 'right', 'down', 'left'];

class Simulator {
  constructor({ board, robot, program }) {
    this.board = board;
    this.robot = robot;
    this.program = program;
    this.stack = [];
    this.start();
  }
  
  start() {
    const [subprogram] = this.program;
    this.stack = [...subprogram];
      
    while (!this.isEndOfGame) {
      const payload = this.stack.shift();
      this.doAction(payload);
    }
      
    if (this.starsLeft) {
      throw new Error('Not all start are collected');
    }
  }
  
  doAction(payload) {
    if (payload.if && payload.if !== this.board[this.robot.y][this.robot.x].color) {
      return;
    }
    
    const { action } = payload;
    
    if (action === 'forward') {
      this.forward();
    } else if (action === 'turn_right') {
      this.turnRight();
    } else if (action === 'turn_left') {
      this.turnLeft();
    } else if (action === 'paint_blue') {
      this.paint('blue');
    } else if (action === 'paint_green') {
      this.paint('green');
    } else if (action === 'paint_red') {
      this.paint('red');
    } else {
      this.stack.unshift(...this.program[action]);
    }
  }
  
  forward() {
    let nextPos = { x: this.robot.x, y: this.robot.y };
    if (this.robot.direction === 'right') {
      nextPos.x += 1;
    } else if (this.robot.direction === 'left') {
      nextPos.x -= 1;
    } else if (this.robot.direction === 'up') {
      nextPos.y -= 1;
    } else if (this.robot.direction === 'down') {
      nextPos.y += 1;
    }
    
    if (!this.board[nextPos.y][nextPos.x]) {
      throw new Error('Out of bounds');
    }
    
    this.robot.x = nextPos.x;
    this.robot.y = nextPos.y;
    
    this.collectStar(this.robot.x, this.robot.y);
  }
  
  turnRight() {
    let index = directions.findIndex(dir => dir === this.robot.direction);
    if (++index > directions.length - 1) {
      index = 0;
    }
    this.robot.direction = directions[index];
  }
  
  turnLeft() {
    let index = directions.findIndex(dir => dir === this.robot.direction);
    if (--index < 0) {
      index = directions.length - 1;
    }
    this.robot.direction = directions[index];
  }

  paint(color) {
    this.board[this.robot.y][this.robot.x].color = color;
  }
  
  collectStar(x, y) {
    if (this.board[y][x].star) {
      this.board[y][x].star = false;
    }
  }
  
  get starsLeft() {
    let stars = 0;
    for (let col = 0; col < this.board.length; col++) {
      for (let row = 0; row < this.board[col].length; row++) {
        if (this.board[col][row] && this.board[col][row].star) {
          stars++;
        }
      }
    }
    return stars;
  } 
  
  get isEndOfGame() {
    return this.stack.length === 0 || this.starsLeft === 0;
  }
}

robozzle = function(board, robot, program) {
  const simulator = new Simulator({ board, robot, program });
  return [simulator.board, simulator.robot];
};