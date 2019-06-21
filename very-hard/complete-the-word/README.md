An input string can be completed if additional letters can be added and no letters need to be taken away to match the word. Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.

Create a function that, given an input string, determines if the word can be completed.


### Examples ###
    canComplete("butl", "beautiful") ➞ true
    // We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

    canComplete("butlz", "beautiful") ➞ false
    // "z" does not exist in the word beautiful.

    canComplete("tulb", "beautiful") ➞ false
    // Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.

    canComplete("bbutl", "beautiful") ➞ false
    // Too many "b"s, beautiful has only 1.


### Notes ###
Both string input and word will be lowercased.