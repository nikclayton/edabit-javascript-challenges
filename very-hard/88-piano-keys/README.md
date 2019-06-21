Create a function that takes a number (key) as an argument and returns an array containing 4 strings:

*   The name of the key (the note).
*   The color of the key (Black or White).
*   The octave the note is in.
*   The corresponding frequency of the note.

You can look at the Wikipedia page (check the **Resources**tab) to find out what the index is for the piano keys, where the octave numbers are and most importantly, how to calculate the frequency of the note, round the frequency to the nearest hundreth. Ignore the shaded parts of the piano (on the Wikipedia page).


### Examples ###
    pianoKeys(1) ➞ ["A", "0", "White", "27.50"]

    pianoKeys(60) ➞ ["G♯/A♭", "5", "Black", "830.61"]

    pianoKeys(0) ➞ false


### Notes ###
*   There are 88 keys, 1 - 88, so there is no 0th key or anything above 88.
*   Try not to put the frequencies in a giant array but to calculate them.
*   Calculate the frequencies from `A`notes, they are rounded by nature (e.g. 440 Hz).
*   If the key isn't in the range 1 - 88, return `false`.
*   **Tip:**White keys don't have sharps ♯ or flats ♭ in their note name.
*   **Tip:**Copy & paste the note names from Wikipedia, then you have the right ♯ and ♭ 's.