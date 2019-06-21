Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.


### Examples ###
    wordRank("The quick brown fox.") ➞ "brown"

    wordRank("Nancy is very pretty.") ➞ "pretty"

    wordRank("Check back tomorrow, man!") ➞ "tomorrow"

    wordRank("Wednesday is hump day.") ➞ "Wednesday"


### Notes ###
*   If two words score the same, return the word that appears first in the original string.
*   The returned string should only contain alphabetic characters (a-z).
*   Preserve case in the returned string (see 4th example above).