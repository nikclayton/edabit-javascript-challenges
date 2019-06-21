Write a function that returns all **sets of 3 elements**that **sum to 0**.


### Examples ###
    threeSum([0, 1, -1, -1, 2]) ➞ [[0, 1, -1], [-1, -1, 2]]

    threeSum([0, 0, 0, 5, -5]) ➞ [[0, 0, 0], [0, 5, -5]]

    threeSum([1, 2, 3]) ➞ []

    threeSum([1]) ➞ []


### Notes ###
*   The original array **may contain duplicate numbers**.
*   Each three-element subarray in your output should be **distinct**.
*   Subarrays should be ordered by the first element of the subarray.
*   Subarrays themselves should be ordered the same as the original array.
*   Return an empty array if no 3 elements sum to zero.
*   Return an empty array if there are fewer than 3 elements.