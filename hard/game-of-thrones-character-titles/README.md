Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

*   The words `and`, `the`, `of`and `in`should be lowercase.
*   All other words should have the *first*character as uppercase and the rest lowercase.


### Examples ###
    correctTitle("jOn SnoW, kINg IN thE noRth.")
    ➞ "Jon Snow, King in the North."

    correctTitle("sansa stark, lady of winterfell.")
    ➞ "Sansa Stark, Lady of Winterfell."

    correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
    ➞ "Tyrion Lannister, Hand of the Queen."


### Notes ###
*   Punctuation and spaces must remain in their original positions.
*   Hyphenated words are considered *separate*words.
*   Be careful with words that contain `and`, `the`, `of`or `in`.
*   See the **Resources**tab for more info on the various JavaScript string methods.