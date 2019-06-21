Write a function that returns `true`if all subsets in a list belong to a given set.


### Examples ###
    validateSubsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3]) ➞ true

    validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3]) ➞ true

    validateSubsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3]) ➞ false

    validateSubsets([[1, 2, 3, 4]], [1, 2, 3]) ➞ false


### Notes ###
*   The **empty set**and the **set**itself are **both**valid subsets of a set (we are not talking about proper subsets here).
*   The set and the subset will each have unique elements.