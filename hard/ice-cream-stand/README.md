For this question, treat people as existing only on integers.

Two ice cream stands: `A`and `B`each occupy a spot on the beach, from `[0, 100]`. Their positions are represented with coordinates `(A, B)`. One position could be:

    [32, 69]

People are distributed equally from `[0, 100]`, and will purchase ice cream from the stand closest to them.

For `(A, B)`above, we have that everyone from`[0, 50]`goes to `A`and everyone from `[51, 100]`goes to `B`. People on 50 will go to `A`because **|50 - 32| = 18 < 19 = |50 - 69|**, and people on 51 will go to `B`because **|51 - 69| = 18 < 19 = |51 - 32| **.

    profit = total number of integers claimed by the ice cream stand

Write a function that calculates the profit for each ice cream stand based on their position. For the example above, `profit(32, 69) = [51, 50]`.

Disregard ties. For instance, if `(A, B) = (49, 51)`, disregard the person on `50`. Profit is equally distributed in this case, with `profit(49, 51) = [50, 50]`.


### Examples ###
    profit(32, 69) ➞ [51, 50]

    profit(49, 51) ➞ [50, 50]

    profit(0, 1) ➞ [1, 100]


### Notes ###
*   `A`< `B`will always be true.
*   `A`and `B`will never occupy the same spot.