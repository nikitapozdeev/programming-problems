/*
  Level: 8 kyu
  Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
  Instructions:
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
    You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

package kata

func RemoveChar(word string) string {
	return word[1 : len(word)-1]
}
