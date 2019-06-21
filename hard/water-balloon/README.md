Once a water balloon pops, is soaks the area around it. The ground gets drier the further away you travel from the balloon.

The effect of a water balloon popping can be modeled using an array. Create a function that takes an array which takes the **pre-pop**state and returns the state after the balloon is popped. The **pre-pop**state will contain **at most**a single balloon, whose size is represented by the only non-zero element.


### Examples ###
    pop([0, 0, 0, 0, 4, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4, 3, 2, 1, 0]

    pop([0, 0, 0, 3, 0, 0, 0]) ➞ [0, 1, 2, 3, 2, 1, 0]

    pop([0, 0, 2, 0, 0]) ➞ [0, 1, 2, 1, 0]

    pop([0]) ➞ [0]


### Notes ###
*   Length of input array is always odd.
*   The input array will always be the exact length it takes for there to be exactly one border zero.
*   If the input array consists only of zeroes, return the same array.