Create a function that takes a number of a guitar string and the number of the fret and returns the corresponding frequency of the note.

*   Check the **Resources Tab**, for the correct frequencies per string.
*   The formula to calculate the frequency is: `String Frequency * 2^(fret/12)`.
*   Round the frequency to the nearest hundreth.
*   For this challenge, we use "Standard Tuning".

So, one fret = a semitone = a half step. From D to D♯ for instance.


### Examples ###
    fretFreq(5, 12) ➞ 220

    fretFreq(4, 6) ➞ 207.65

    fretFreq(2, 23) ➞ 932.32


### Notes ###
N/A