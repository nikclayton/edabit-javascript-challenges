Create a function that takes in two words as input and returns an array of three elements, in the following order:

1.  Shared letters between two words.
2.  Letters unique to word 1.
3.  Letters unique to word 2.

Each element should have **unique**letters, and have each letter be **alphabetically sorted**.


### Examples ###
    letters("sharp", "soap") ➞ ["aps", "hr", "o"]

    letters("board", "bored") ➞ ["bdor", "a", "e"]

    letters("happiness", "envelope") ➞ ["enp", "ahis", "lov"]

    letters("kerfuffle", "fluffy") ➞ ["flu", "ekr", "y"]
    // Even with multiple matching letters (e.g. 3 f's), there should
    // only exist a single "f" in your first element.

    letters("match", "ham") ➞ ["ahm", "ct", ""]
    // "ham" does not contain any letters that are not found already
    // in "match".


### Notes ###
*   Both words will be in lower case.
*   You do not have to worry about punctuation, all words only have letters from `[a-z]`.
*   If an element contains no letters, return an empty string (see last example).