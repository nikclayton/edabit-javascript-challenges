Create a function that takes in a sentence and returns a running list of **consonants per word**and **vowels per word**.


### Examples ###
    stringCode("Happy Birthday To Me!")
    ➞ ["4 6 1 1", "1 2 1 1"]

    // Consonants - 4 : [H, p, p, y], 6 : [B, r, t, h, d, y], 1: [T], 1 : [M]
    // Vowels - 1: [a], 2 : [i, a], 1: [o], 1: [e]

    stringCode("I'd like to drink my first glass of champagne.")
    ➞ [ "1 2 1 4 2 4 4 1 6', '1 2 1 1 0 1 1 1 3"]

    stringCode("The first man to walk on the moon was Neil Armstrong.")
    ➞ [ "2 4 2 1 3 1 2 2 2 2 7", "1 1 1 1 1 1 1 2 1 2 2" ]


### Notes ###
*   Only count letters and disregard all other characters (e.g. numbers, punctuation, etc).
*   Count **y**as a consonant.
*   Capitalization does not matter.