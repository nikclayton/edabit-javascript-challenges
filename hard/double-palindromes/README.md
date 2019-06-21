Strings can be segregated into both their letter and digit components.

1.  A **double palindrome**is when a string's letter component and digit component are both palindromes.
2.  A **single-palindrome**is when either (but **not both**) the letter component or the digit component are palindromes.

To illustrate:

    "cab97ac79" // double-palindrome
    // "cabac" and "9779" are both palindromes.

    "1abc4de1" // single-palindrome
    // "141" is a palindrome.

Write a function that maps **double palindromes**to the number **2**, **single palindromes**to the number **1**, and everything else to the number **0**.


### Examples ###
    palindromeSet(["cb77c", "ccc888", "ccc789", "abc89"]) ➞ [2, 2, 1, 0]

    palindromeSet(["789", "555", "ccc", "abba"]) ➞ [0, 1, 1, 1]

    palindromeSet(["7a", "5f", "6c"]) ➞ [2, 2, 2]


### Notes ###
*   A string is composed of only letters or only numbers, can be at most a single palindrome (see example #2).
*   All single character components are trivially palindromes (see example #3).
*   All letters will be lower cased.