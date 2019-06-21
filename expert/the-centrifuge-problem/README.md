A centrifuge, as you probably know, is a laboratory device used to separate fluids based on density. The separation is achieved through centrifugal force by spinning a collection of test tubes at high speeds. This means, the configuration needs to be in balance.

Create a function that takes two numbers as arguments (*n*and *k*) and returns `true`if the configuration is balanced and `false`if it's not. To check out the formula, look at the **resources tab**.

![The Centrifuge Problem with 6 Holes, n=6](<https://edabit-challenges.s3.amazonaws.com/6_hole_centrifuge.png> "The Centrifuge Problem with 6 Holes, n=6")

Here are the valid configurations for *n*= 6, *k*= 2, 3, 4 and 6.


### Examples ###
    cFuge(6, 4) ➞ true

    cFuge(2, 1) ➞ false

    cFuge(3, 3) ➞ true


### Notes ###
*   One test tube (*k*= 1) is **never**in balance.
*   One hole (*n*= 1) is **never**in balance, even empty. Just sayin'.