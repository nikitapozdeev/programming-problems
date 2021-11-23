/*
  Level: 7 kyu
  Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac
  Instructions:
    Take 2 strings s1 and s2 including only letters from ato z.
    Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  Examples:
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"

    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

package kata

import "sort"

func TwoToOne(s1 string, s2 string) string {
  var r []rune
  seen := make(map[rune]bool)
  
  for _, char := range s1 + s2 {
    if _, ok := seen[char]; !ok {
      seen[char] = true
      r = append(r, char)
    }
  }
  
  sort.Slice(r, func(i, j int) bool {
    return r[i] < r[j]
  })
  
  return string(r)
}