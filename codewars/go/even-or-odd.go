/*
  Level: 8 kyu
  Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
  Instructions:
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

package kata

func EvenOrOdd(number int) string {
  if number % 2 == 0 {
    return "Even"
  } else {
    return "Odd"
  }
}