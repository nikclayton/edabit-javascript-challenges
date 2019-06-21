Write a function that returns `true`if a given name can generate an array of words.


### Examples ###
    anagram("Justin Bieber", ["injures", "ebb", "it"]) ➞ true

    anagram("Natalie Portman", ["ornamental", "pita"]) ➞ true

    anagram("Chris Pratt", ["chirps", "rat"]) ➞ false
    // Not all letters are used

    anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]) ➞ false
    // "s" does not exist in the original name


### Notes ###
*   Each letter in the name may only be used once.
*   All letters in the name must be used.