A word is alphabetically sorted if all of the letters in it are in consecutive alphabetical order. Some examples of alphabetically sorted words: *abhors*(*a*is before *b*, *b*is before *h*, *h*is before *o*, etc.), *ghost*, *accent*, *hoop*.

Create a function that takes in a sentence as input and returns `true`if there is **at least one**alphabetically sorted word inside that has a **minimum length of 3**.


### Examples ###
    isAlphabeticallySorted("Paula has a French accent.") ➞ true
    // "accent" is alphabetically sorted.

    isAlphabeticallySorted("The biopsy returned negative results.") ➞ true
    // "biopsy" is alphabetically sorted.

    isAlphabeticallySorted("She sells sea shells by the sea shore.") ➞ false
    // Although "by" is alphabetically sorted, it is only 2 letters long.


### Notes ###
*   Do not count words with 2 or fewer characters.
*   Ignore punctuation (periods, commas, etc).