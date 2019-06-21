Create a function that returns `true`if an array of pairs are sufficient for a clear ordering of all items.

To illustrate:

    clearOrdering([["D", "A"], ["C", "B"], ["A", "C"]]) ➞ true
    // Since unequivocally: "D" < "A" < "C" < "B"

On the other hand:

    clearOrdering([["D", "A"], ["B", "A"], ["C", "D"]]) ➞ false
    // Since we know that "C" < "D" < "A", and we know "B" < "A"
    // but we don't know anything about "B"s relationship with "C" or "D".


### Examples ###
    clearOrdering([["S", "T"], ["T", "U"], ["U", "V"]]) ➞ true

    clearOrdering([["T", "S"], ["T", "U"], ["U", "V"], ["V", "W"]]) ➞ false


### Notes ###
See Comments for a good visualization of the question.