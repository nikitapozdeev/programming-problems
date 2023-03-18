/**
 * https://leetcode.com/problems/design-browser-history
 */

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = [homepage];
  this.historyPtr = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history.splice(this.historyPtr + 1);
  this.history.push(url);
  this.historyPtr++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.historyPtr = Math.max(0, this.historyPtr - steps);
  return this.history[this.historyPtr];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.historyPtr = Math.min(this.history.length - 1, this.historyPtr + steps);
  return this.history[this.historyPtr];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */