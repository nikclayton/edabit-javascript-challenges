A number may not be a palindrome, but it's descendant can be. A number's direct child is created by summing each pair of adjacent digits to create the digits of the next number.

For instance, `123312`is not a palindrome, but it's next child `363`is, where: `3 = 1 + 2; 6 = 3 + 3; 3 = 1 + 2`.

Create a function that returns `true`if the **number itself**is a palindrome or any of its **descendants down to 2 digits**(a 1-digit number is trivially a palindrome).


### Examples ###
    palindromedescendant(11211230) ➞ true
    // 11211230 ➞ 2333 ➞ 56 ➞ 11

    palindromeDescendant(13001120) ➞ true
    // 13001120 ➞ 3012 ➞ 33

    palindromeDescendant(23336014) ➞ true
    // 23336014 ➞ 5665

    palindromeDescendant(11) ➞ true
    // Number itself is a palindrome


### Notes ###
Numbers will always have an even number of digits.