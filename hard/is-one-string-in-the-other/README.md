Create a function that takes two strings and returns `true`if either of the strings appears at the very end of the other string. Return `false`otherwise. "*" is a wildcard, so it can take the place of any character.


### Examples ###
    overlap("ABC", "Ican'tsingmyABC") ➞ true

    overlap("abc", "Ican'tsingmyABC") ➞ true

    overlap("Ican'tsingmyABC", "abc") ➞ true

    overlap("hello world", "hello") ➞ false

    overlap("+=", "this should work too +=") ➞ true

    overlap("hey", "*********") ➞ true


### Notes ###
N/A