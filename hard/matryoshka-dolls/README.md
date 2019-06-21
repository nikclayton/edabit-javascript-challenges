Matryoshka dolls are traditionally wooden dolls that can be nested by fitting smaller dolls into larger ones. Suppose we can arrays can be nested similarly, placing **smaller arrays**into **larger ones**, in the following sense:

`Array A`can be nested inside `Array B`if:

1.  `min(array A)`> `min(array B)`
2.  `max(array A)`< `max(array B)`

For example, if `A = [2, 3, 9, 5]`and `B = [10, 2, 1]`, then `A`can be nested inside `B`, since:

*   `min(A) = 2 > 1 = min(B)`and
*   `max(A) = 9 < 10 = max(B)`

Create a function that returns `true`if every single sub-array inside an array can be nested Matroyshka style, and `false`otherwise.


### Examples ###
    matryoshka([[2, 2, 7], [3, 4, 5, 6], [4, 5]]) ➞ true
    // [4, 5] nested inside [3, 4, 5, 6], [3, 4, 5, 6] nested inside [2, 2, 7], etc.
    // Dolls nested from largest to smallest

    matryoshka([[4, 5], [6, 3], [7, 6, 5, 4, 3, 2], [8, 1]]) ➞ true
    // Dolls nested from smallest to largest

    matryoshka([[7, 1], [7, 6, 5, 4, 3, 2], [6, 3], [4, 5]]) ➞ false
    // [7, 2] and [7, 6, 5, 4, 3, 2] share the same max.
    // Second doll cannot be nested properly inside first doll

    matryoshka([[1, 5], [2, 6], [3, 7]]) ➞ false
    // Elements are overlapping, cannot be nested.


### Notes ###
*   Subarrays can be nested from smallest to largest or largest to smallest.
*   Elements must be strictly nested - e.g. no two arrays can share either the same MAX or the same MIN (see example #3).
*   Sub-arrays may not necessarily have unique elements (see example #1).
*   Sub-arrays can be in any order (see example #2).