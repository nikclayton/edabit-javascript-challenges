Write a function that returns `true`if the binary string can be rearranged to form a string of alternating `0`s and `1`s.


### Examples ###
    canAlternate("0001111") ➞ true
    // Can make: "1010101"

    canAlternate("01001") ➞ true
    // Can make: "01010"

    canAlternate("010001") ➞ false

    canAlternate("1111") ➞ false


### Notes ###
*   No substring of the output may contain more than one consecutive repeating character (e.g. `00`or `11`are not allowed).
*   Return `false`if a string only contains `0`s or only contains `1`s.