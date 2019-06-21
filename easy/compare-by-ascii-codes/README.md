Create a function to that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.


### Examples ###
    asciiSort(["hey", "man"]) ➞ "man"
    // ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
    // ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316

    asciiSort(["majorly", "then"]) ➞ "then"

    asciiSort(["victory", "careless"]) ➞ "victory"


### Notes ###
Both words will have strictly different ASCII sums.