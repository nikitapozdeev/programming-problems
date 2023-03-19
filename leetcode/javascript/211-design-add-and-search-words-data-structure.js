/**
 * https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let curr = this.root;
  for (const char of word) {
    if (!curr.children[char]) {
      curr.children[char] = new TrieNode();
    }
    curr = curr.children[char];
  }
  curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (node, charIndex) => {
    let curr = node;

    for (let i = charIndex; i < word.length; i++) {
      const char = word[i];
      if (char === '.') {
        for (child of Object.values(curr.children)) {
          if (dfs(child, i + 1)) {
            return true;
          } 
        }
        return false;
      } else {
        if (!curr.children[char]) {
          return false;
        }

        curr = curr.children[char];
      }
    }

    return curr.endOfWord;
  }

  return dfs(this.root, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */