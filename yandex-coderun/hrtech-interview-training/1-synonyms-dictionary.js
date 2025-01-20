const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const words = {};
let pairsCount = 0;
let lineNumber = -1;

rl.on('line', line => {
  lineNumber++;

  if (lineNumber === 0) {
    pairsCount = Number(line);
  } else if (lineNumber <= pairsCount) {
    const [wordA, wordB] = line.split(' ');
    words[wordA] = wordB;
    words[wordB] = wordA;
  } else {
    console.log(words[line]);
    rl.close();
  }
});