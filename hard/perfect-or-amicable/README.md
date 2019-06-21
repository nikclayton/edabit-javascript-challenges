Given a positive number x, if all the positive divisors of x (excluding x) add up to x, then x is said to be a perfect number.

For example, the set of positive divisors of 6 excluding 6 itself is (1, 2, 3). The sum of this set is 6. Therefore, 6 is a *perfect*number.

Given a positive number x, if all the positive divisors of x add up to a second number y, and all the positive divisors of y add up to x, then x and y are said to be a pair of *amicable*numbers.

Create a function that takes a number and returns `"Perfect"`if the number is perfect, `"Amicable"`if the number is part of an amicable pair, or `"Neither"`.


### Examples ###
    numType(6) ➞ "Perfect"

    numType(2924) ➞ "Amicable"

    numType(5010) ➞ "Neither"


### Notes ###
N/A