A positive number's population is the number of 1s in its binary representation. An *evil*number has an even numbered population, whereas an *odious*number has an odd numbered population. Moreover, a number is *pernicious*if its population is a prime number.

Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").


### Examples ###
    howBad(7) ➞ ["Odious", "Pernicious"]
    // binary = 111

    howBad(17) ➞ ["Evil", "Pernicious"]
    // binary = 10001

    howBad(23) ➞ ["Evil"]
    // binary = 10111


### Notes ###
N/A