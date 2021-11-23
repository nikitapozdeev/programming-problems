/*
  Level: 7 kyu
  Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
  Instructions:
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    Examples:

    solution("abc", "bc") // returns true
    solution("abc", "d") // returns false
*/

package kata

import (
	"strings"
)

func solution(str, ending string) bool {
	return strings.HasSuffix(str, ending)
}
