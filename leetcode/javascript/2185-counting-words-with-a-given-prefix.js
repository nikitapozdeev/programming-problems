/**
 * https://leetcode.com/problems/counting-words-with-a-given-prefix
 */

/**
 * Dumb brute force solution.
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.reduce((acc, curr) => acc += Number(curr.startsWith(pref)), 0);
};

/**
 * Custom trie solution which works slower, but added for the learning purpuses.
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  const trie = new Trie(words, pref.length);
  return trie.count(pref);
};

class TrieNode {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}

class Trie {
  constructor(words, maxSearchSize) {
    this.maxSearchSize = maxSearchSize;
    this.root = new TrieNode();
    for (const word of words) {
      this.add(word);
    }
  }

  add(word) {
    const steps = Math.min(this.maxSearchSize, word.length);
    let curr = this.root;
    for (let i = 0; i < steps; ++i) {
      const char = word[i];
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr.children[char].count++;
      curr = curr.children[char];
    }
  }

  count(word) {
    let curr = this.root;
    for (const char of word) {
      curr = curr.children[char];
      if (!curr) return 0;
    }
    return curr.count;
  }
}