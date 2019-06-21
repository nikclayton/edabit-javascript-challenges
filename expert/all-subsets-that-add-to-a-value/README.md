Create a function that returns all subarrays in an array that sum to a particular value. Return the subarrays in the following order:

1.  First by **ascending length**.
2.  Second by comparing element-by-element, starting from the leftmost one. Put the array with the **smaller**element first in the pairwise comparison.

The following example will illustrate:

    getSubsets([-3, -2, -1, 0, 1, 2, 3], 2)
    [ // All the subsets below sum to 2.
      [2],
      [-1, 3],
      [0, 2], // Same length: -1 < 0, so [-1, 3] goes before [0, 2]
      [-3, 2, 3],
      [-2, 1, 3],
      [-1, 0, 3],
      [-1, 1, 2],
      [-3, 0, 2, 3],
      [-2, -1, 2, 3],
      [-2, 0, 1, 3], // Same length + same first element: -1 < 0, so [-2, -1, 2, 3] goes before [-2, 0, 1, 3]
      [-1, 0, 1, 2],
      [-3, -1, 1, 2, 3],
      [-2, -1, 0, 2, 3],
      [-3, -1, 0, 1, 2, 3]
    ]


### Examples ###
    getSubsets([-1, 0, 1, 2], 2) ➞ [[2], [0, 2], [-1, 1, 2], [-1, 0, 1, 2]]

    getSubsets([-1, 0, 1, 2], 3) ➞ [[1, 2], [0, 1, 2]]

    getSubsets([1, 2, 3, 4], 5) ➞ [[1, 4], [2, 3]]

    getSubsets([-1, 0, 1, 2], 4) ➞ []


### Notes ###
*   Arrays will have unique numbers.
*   Return an empty array if there does not a exist a subset whose numbers sum to that value (see fourth example).