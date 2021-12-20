function find(n){
  const seq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const seq = [0, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5 ]
  const seq = [0, 1, 2, 2, 3, 3, 4, 4, 4, 0, 0, 0 ]
  const seq = [0, 1, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0 ]
  const seq = [0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0 ]
  const seq = [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  
  if (n < 4) {
    return seq[n];
  }
  
  let nextNum = 3;
  while (n > seq.length - 1) {
    for (let i = 0; i < seq[nextNum]; i++) {
      seq.push(nextNum);
    }
    nextNum++;
  }
  
  return seq[n];
} 

function find2(n){
  let len = 4;
  let seq = { 
    0: 0,
    1: 1,
    2: 2,
    3: 2
  };

  if (n < 4) {
    return seq[n];
  }
  
  let nextNum = 3;
  while (n > len - 1) {
    for (let i = 0; i < seq[nextNum]; i++) {
      seq[len] = nextNum;
      len++;
    }
    nextNum++;
  }
  
  return seq[n];
} 


//console.log(find(43940106)); //63600

console.log(find2(43940106)); //63600