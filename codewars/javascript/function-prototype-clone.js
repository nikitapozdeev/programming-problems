/*
  Level: 5 kyu
  Link: https://www.codewars.com/kata/53381a646068efc50100072c
  Instructions: 
    Without using eval, write a clone method to clone a function's arguments and body into a new function. 
    You don't have to worry about the name of the function; it's impossible to override that property of a function.

    var original = function original_name(a, b) { return a + b; };

    var cloned = o.clone();
    // cloned == function(a, b) { return a + b; }
    So the new cloned function is a completely new object, with its own scope, but effectively behaves the exact same way as the original function.

    NOTE: This kata focuses on ES5 only (function fn() {}), but you get bonus points for making your solution ES6 compatible (fn = (a, b) => a + b)!
*/

Function.prototype.clone = function() {
  const cloned = new Function('return ' + this.toString())();
  for (var key in this)
    cloned[key] = this[key];
  
  return cloned;
};