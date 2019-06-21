Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns `true`if this brick can fit into a hole with the width(w) and height(h).


### Examples ###
    doesBrickFit(1, 1, 1, 1, 1) ➞ true

    doesBrickFit(1, 2, 1, 1, 1) ➞ true

    doesBrickFit(1, 2, 2, 1, 1) ➞ false


### Notes ###
*   You can turn the brick with any side towards the hole.
*   We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strickly less).