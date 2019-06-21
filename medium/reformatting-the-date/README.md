Create a function that converts dates from one of five string formats:

1.  "January 9, 2019" (MM D, YYYY)
2.  "Jan 9, 2019" (MM D, YYYY)
3.  "01/09/2019" (MM/DD/YYYY)
4.  "01-09-2019" (MM-DD-YYYY)
5.  "01.09.2019" (MM.DD.YYYY)

into an array with this format: `[MM, DD, YYYY]`, where `MM`, `DD`, and `YYYY`are all integers. Using the example above:


### Examples ###
    convertDate("January 9, 2019") ➞ [1, 9, 2019]

    convertDate("Jan 9, 2019") ➞ [1, 9, 2019]

    convertDate("01/09/2019") ➞ [1, 9, 2019]

    convertDate("01-09-2019") ➞ [1, 9, 2019]

    convertDate("01.09.2019") ➞ [1, 9, 2019]


### Notes ###
You can solve this any number of ways, but using JavaScript's `new Date()`method is probably the easiest. Check the **Resources**tab for documentation.