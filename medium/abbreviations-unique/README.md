You are given two inputs:

1.  A array of abbreviations.
2.  An array of words.

Write a function that returns `true`if each abbreviation **uniquely identifies**a word, and `false`otherwise.


### Examples ###
    uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
    // "ho" and "h" are ambiguous and can identify either "house" or "hope"

    uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

    uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

    uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true


### Notes ###
Abbreviations will be a substring from `[0, n]`from the original string.