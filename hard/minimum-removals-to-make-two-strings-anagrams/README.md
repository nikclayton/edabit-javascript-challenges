Create a function that returns the **smallest number of letter removals**so that two strings are **anagrams**of each other.


### Examples ###
    minRemovals("abcde", "cab") ➞ 2
    // Remove "d", "e" to make "abc" and "cab".

    minRemovals("deafk", "kfeap") ➞ 2
    // Remove "d" and "p" from the first and second word, respectively.

    minRemovals("acb", "ghi") ➞ 6
    // Remove all letters from both words to get "" and "".


### Notes ###
*   An anagram is any string that can be formed by shuffling the characters of the original string. For example: `baedc`is an anagram of `abcde`.
*   An empty string can be considered an anagram of itself.