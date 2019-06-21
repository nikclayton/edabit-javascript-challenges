Create a function takes in two arrays and returns an **intersection array**and a **union array**.

1.  **Intersection Array:**Elements shared by both.
2.  **Union Array:**Elements that exist in first or second array, or both (not exclusive OR).

While the input arrays may have duplicate numbers, the returned **intersection**and **union**arrays should be *set-ified*- that is, contain no duplicates. Returned arrays should be sorted in **ascending**order.

    Array 1: [5, 6, 6, 6, 8, 9]
    Array 2: [3, 3, 4, 4, 5, 5, 8]

    Intersection: [5, 8]
    // 5 and 8 are the only 2 numbers that exist in both arrays.

    Union: [3, 4, 5, 6, 8, 9]
    // Each number exists in at least one array.


### Examples ###
    intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) ➞ [[4], [1, 2, 3, 4, 5, 9]]

    intersectionUnion([1, 2, 3], [4, 5, 6]) ➞ [[], [1, 2, 3, 4, 5, 6]]

    intersectionUnion([1, 1], [1, 1, 1, 1]) ➞ [[1], [1]]


### Notes ###
*   Order of output should be: `[Intersection], [Union]`.
*   Remember both output arrays should be in **ascending order**.
*   Each input array will have at least one element.
*   If both arrays are disjoint (share nothing in common), return an empty array `[]`for the intersection.