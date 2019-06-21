The *weight*of a word can be calculated by summing the `Unicode`code point for each character in the word, *excluding*any punctuation:

    "Wouldn't" = 87 + 111 + 117 + 108 + 100 + 110 + 116 = 749

Write a function that takes a sentence as a string, returning `true`if all word weights increase for each word in the sentence, and `false`if any word weight decreases or remains the same.


### Examples ###
    increasingWordWeight("Why not try?") ➞ true
    // 312 -> 337 -> 351 (weights increase)

    increasingWordWeight("All other roads.") ➞ false
    // 281 -> 546 -> 537 (537 is less than 546)


### Notes ###
N/A