**Hamming distance**is the number of characters that differ between two strings.

To illustrate:

    String1: "abcbba"
    String2: "abcbda"

    Hamming Distance: 1 - "b" vs. "d" is the only difference.

Create a function that computes the **hamming distance**between two strings.


### Examples ###
    hammingDistance("abcde", "bcdef") ➞ 5

    hammingDistance("abcde", "abcde") ➞ 0

    hammingDistance("strong", "strung") ➞ 1


### Notes ###
Both strings will have the same length.