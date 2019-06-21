Create a function that takes two timestamps as input, and returns a string describing the time elapsed between them (in days, hours, minutes, seconds as appropriate).


### Examples ###
    elapsed(1559813526, 1559899926) ➞ "1 day"

    elapsed(1559681004, 1559899926) ➞ "2 days, 12 hours, 48 minutes, 42 seconds"

    elapsed(1558773066, 1559899926) ➞ "13 days, 1 hour, 1 minute"


### Notes ###
Timestamps are seconds elapsed since 1st January 1970.