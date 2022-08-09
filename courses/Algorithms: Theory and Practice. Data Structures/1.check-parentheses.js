var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  console.log(isBalanced(line))
});

function isBalanced(input) {
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  const validChars = new Set(['{', '(', '[', '}', ')', ']']);
  const stack = [];
    
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!validChars.has(char)) {
        continue;
    }
    if (map[char]) {
      stack.push(i);
    } else if (stack.length === 0) {
      return i + 1;
    } else {
      const index = stack.pop();
      const item = input[index];
      if (map[item] !== char) {
        return i + 1;
      }
    }
  }
    
  return stack.length === 0 ? 'Success' : (stack[stack.length - 1] + 1);
}