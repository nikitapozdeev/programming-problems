/**
 * https://leetcode.com/problems/length-of-last-word/
 */

#include <string.h>

int lengthOfLastWord(char* s){
  int length = 0;
  int i = strlen(s) - 1;
  
  while (s[i] == ' ') {
    i--;
  }
  
  while (i >= 0 && s[i] != ' ') {
    length++;
    i--;
  }
  
  return length;
}