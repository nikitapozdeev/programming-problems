/*
  Level: 6 kyu
  Link: https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
  Instructions: 
    The new "Avengers" movie has just been released! 
    There are a lot of people at the cinema box office standing in a huge line. 
    Each of them has a single 100, 50 or 25 dollar bill. 
    An "Avengers" ticket costs 25 dollars.

    Vasya is currently working as a clerk. He wants to sell a ticket to every 
    single person in this line.

    Can Vasya sell a ticket to every person and give change if he initially has no 
    money and sells the tickets strictly in the order people queue?

    Return YES, if Vasya can sell a ticket to every person and give change with the 
    bills he has at hand at that moment. Otherwise return NO.

  Examples:
    tickets([25, 25, 50]) // => YES 
    tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
    tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

function tickets(peopleInLine){
  const ticketPrice = 25;
  const billType = { d25: 25, d50: 50, d100: 100 };
  const cashBox = { 
    [billType.d25]: 0, 
    [billType.d50]: 0, 
    [billType.d100]: 0 
  };
  
  for (let personCash of peopleInLine) {
    const change = personCash - ticketPrice;
    if (change === 25) {
      if (cashBox[change] > 0) {
        cashBox[change]--;
      } else {
        return "NO";
      }
    } else if (change === 75) {
      if (cashBox[billType.d25] >= 1 && cashBox[billType.d50] >= 1) {
        cashBox[billType.d25]--;
        cashBox[billType.d50]--;
      } else if (cashBox[billType.d25] >= 3) {
        cashBox[billType.d25] = cashBox[billType.d25] - 3;
      } else {
        return "NO";
      }
    }
    cashBox[personCash]++;
  }
  return "YES";
}