A museum wants to get rid of some exhibitions. Vanya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

Create a function that takes an array of integers and removes the smallest value.


### Examples ###
    removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]

    removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]

    removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]


### Notes ###
*   Don't change the order of the left over items.
*   If you get an empty array, return an empty array: `[] ➞ []`.
*   If there are multiple items with the same value, remove item with lower index (3rd example).