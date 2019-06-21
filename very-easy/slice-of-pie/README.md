Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

1.  Total number of slices.
2.  Number of recipients.
3.  How many slices each person gets.

The function will be in this form:

    equalSlices(total slices, no. recipients, slices each)


### Examples ###
    equalSlices(11, 5, 2) ➞ true
    // 5 people x 2 slices each = 10 slices < 11 slices

    equalSlices(11, 5, 3) ➞ false
    // 5 people x 3 slices each = 15 slices > 11 slices

    equalSlices(8, 3, 2) ➞ true

    equalSlices(8, 3, 3) ➞ false

    equalSlices(24, 12, 2) ➞ true


### Notes ###
*   Return (trivially) `true`if there are zero people.
*   It's fine not to use the entire pie.
*   All test parameters are integers.
*   Don't forget to `return`the result.
*   If you get stuck on a challenge, find help in the **Resources**tab.
*   If you're *really*stuck, unlock solutions in the **Solutions**tab.