Function.prototype.myBind = function myBind(context, ...args1) {
  return (...args2) => this.call(context, ...args1, ...args2);
}

function test() {
  return this.a + this.b;
}

const bindedTest = test.myBind({ a: 1, b: 2 });
console.log(bindedTest());