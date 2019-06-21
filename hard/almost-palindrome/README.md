A string is an **almost-palindrome**if, by changing **only one character**, you can make it a palindrome. Create a function that returns `true`if a string is an **almost-palindrome**and false otherwise.


### Examples ###
    almostPalindrome("abcdcbg") ➞ true
    // Transformed to "abcdcba" by changing "g" to "a".

    almostPalindrome("abccia") ➞ true
    // Transformed to "abccba" by changing "i" to "a".

    almostPalindrome("abcdaaa") ➞ false
    // Can't be transformed to a palindrome in exactly 1 turn.

    almostPalindrome("1234312") ➞ false


### Notes ###
Return **false**if the string is **already a palindrome**.