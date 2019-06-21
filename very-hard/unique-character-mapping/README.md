Write a function that returns a character mapping from a word.


### Examples ###
    characterMapping("abcd") ➞ [0, 1, 2, 3]

    characterMapping("abb") ➞ [0, 1, 1]

    characterMapping("babbcb") ➞ [0, 1, 0, 0, 2, 0]

    characterMapping("hmmmmm") ➞ [0, 1, 1, 1, 1, 1]


### Notes ###
*   Start your counter at 0, and increment by **1**each time you encounter a new character.
*   Identical characters should share the same number.