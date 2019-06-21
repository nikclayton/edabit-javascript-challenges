Two arrays are part of the same **zipper**if the ending is identical. The identical section can be thought of as being "zipped-up". Below, `[2, 2, 4]`is "zipped-up".

    Array 1: [3, 5, 8, 9, 2, 2, 4]
    Array 2: [1, 7, 2, 2, 4]

Create a function that takes in two arrays and the **first index in both arrays**that the zipper diverges. If the ending is NOT identical, return `false`. If both arrays ARE identical, return `true`.

To illustrate:

    zipper([3, 5, 8, 9, 2, 2, 4], [1, 7, 2, 2, 4]) ➞ [3, 1]
    // Zipper 1: 9 (index-3) is first element to diverge.
    // Zipper 2: 7 (index-1) is first element to diverge.


### Examples ###
    zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]) ➞ [4, 7]

    zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]) ➞ [0, 0]

    zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]) ➞ false

    zipper([5, 4, 3, 2, 6], [5, 4, 3, 2, 6]) ➞ true


### Notes ###
Use zero-indexing for the arrays.