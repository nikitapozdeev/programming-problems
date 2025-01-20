const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  const charMap = { '(': ')', '[': ']', '{': '}' };
  const stack = [];

  for (const char of line) {
    if (charMap[char]) {
      stack.push(char);
    } else {
      const popped = stack.pop();
      if (charMap[popped] !== char) {
        console.log('no');
        rl.close();
        return;
      }
    }
  }

  if (stack.length === 0) {
    console.log('yes')
  } else {
    console.log('no');
  }
  rl.close();
});