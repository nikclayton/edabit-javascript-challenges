Create a function that takes three arguments `(txt, txt_length, txt_suffix)`and returns a truncated string.

*   **txt:**Original string.
*   **txt_length:**Truncated length limit.
*   **txt_suffix:**Optional suffix string parameter.

Truncated returned string length should adjust to passed length in parameters regardless of length of the suffix.


### Examples ###
    truncate("CatDogDuck", 9, "Rat") ➞ "CatDogRat"

    truncate("DogCat", 3) ➞ "Dog"

    truncate("The quick brown fox jumped over the lazy dog.", 15, "...") ➞ "The quick br..."


### Notes ###
To "truncate" means to shorten by cutting off a part.