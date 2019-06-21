Create a function that returns the prime factorization of a number as a sorted list of arrays. Include the multiplicity of each prime in the arrays:

*   [(prime_0, mult_0), ..., (prime_k, mult_k)]
*   where prime_0 < prime_1 < ... < prime_k


### Examples ###
    getPrimeFactorization(4) ➞ [[2, 2]]

    getPrimeFactorization(10) ➞ [[2, 1], [5, 1]]

    getPrimeFactorization(60) ➞ [[2, 2], [3, 1], [5, 1]]


### Notes ###
*   Don't worry about negatives or floats. All inputs will be positive numbers.
*   1 is not a prime! Do not include it. You will not be given 1 as an input.
*   All inputs will be less than 10,000.