Write a function that returns `true`if the phone number is in a valid format. The valid formats are:

**With Country Code**

1.  `+1-892-445-7663`
2.  `1-892-445-7663`
3.  `1 (892) 445-7663`
4.  `1.892.567.8901`
5.  `1/892/567/8901`
6.  `1 892 567 8901`
7.  `18925678901`

**Without Country Code**

1.  `892-445-7663`
2.  `(892) 445-7663`
3.  `892.567.8901`
4.  `892/567/8901`
5.  `892 567 8901`
6.  `8925678901`


### Examples ###
    validate("578-332-1114") ➞ true

    validate("57-332-1114") ➞ false

    validate("577 332  1114") ➞ false
    # More than one space in between digits clusters.

    validate("57 332 1114") ➞ false
    # Unacceptable digit cluster length.

    validate("157%332-1114") ➞ false
    # Unacceptable delimiter.


### Notes ###
*   The country code will always be `+1`or `1`.
*   Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
*   There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
*   You do not have to worry about extensions.