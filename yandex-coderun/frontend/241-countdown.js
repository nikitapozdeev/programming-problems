function createCountdown(initialValue) {
  if (!Number.isInteger(initialValue)) {
    initialValue = 0;
  }
  
  return () => {
    if (initialValue > 0) {
      return initialValue--;
    }

    return 0;
  }
}

const counter = createCountdown(2.5);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());