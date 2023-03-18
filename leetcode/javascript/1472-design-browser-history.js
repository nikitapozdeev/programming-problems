/**
 * https://leetcode.com/problems/design-browser-history
 */

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = [homepage];
  this.historyCurrentPtr = 0;
  this.historyLastPtr = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.historyCurrentPtr++;
  if (this.historyCurrentPtr > this.history.length - 1) {
    this.history.push(url);
  } else {
    this.history[this.historyCurrentPtr] = url;
  }
  this.historyLastPtr = this.historyCurrentPtr;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.historyCurrentPtr = Math.max(0, this.historyCurrentPtr - steps);
  return this.history[this.historyCurrentPtr];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.historyCurrentPtr = Math.min(this.historyLastPtr, this.historyCurrentPtr + steps);
  return this.history[this.historyCurrentPtr];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */