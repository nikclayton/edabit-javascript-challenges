Write a function that takes in a string and returns all possible combinations. Return the final result in **alphabetical order**.


### Examples ###
    unravel("a[b|c]") ➞ ["ab", "ac"]

    unravel("a[b|c]de[f|g]") ➞ ["abdef", "acdef", "abdeg", "acdeg"]

    unravel("a[b]c[d]") ➞ ["abcd"]

    unravel("a[b|c|d|e]f") ➞ ["abf", "acf", "adf", "aef"]

    unravel("apple [pear|grape]") ➞ ["apple grape", "apple pear"]


### Notes ###
Think of each element in every block (e.g. `[a|b|c]`) as a **fork in the road**.