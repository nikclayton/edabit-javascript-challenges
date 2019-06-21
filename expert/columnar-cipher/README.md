The columnar cipher is a transposition cipher that works like this.

Start with a secret message:

    msg = "Meet me by the lake at midnight. Bring shovel."

Transform uppercase letters into lowercase and remove punctuation and spaces:

    msg = "meetmebythelakeatmidnightbringshovel"

Then, pick a keyword made out of distinct letters:

    keyword = "python"

Break up the message into chunks of the same length as the keyword, and write them in rows under the keyword. Then, number the columns based on the alphabetised order of the letters in the keyword:

pythonmeetmebythelakeatmidnightbringshovel465132

Read off the enciphered message (ciphertext) from the columns, in the order specified by the numbers:

    ciphertext = "thaiivelmhglmetgnembaitsetenroeykdbh"

If the message length is not a multiple of the keyword length, fill in each blank space with "x". For example:

    msg = "Meet me at midnight."

    keyword = "python"

pythonmeetmeatmidnightxx

Create a function that takes a string and a keyword. Return the ciphertext if the string is in plaintext (i.e. broken up into normal English words and punctuated), or the deciphered message if the string is in ciphertext. The resulting deciphered message will not have spaces.


### Examples ###
    cCipher("Meet me by the lake at midnight. Bring shovel.", "python")
    ➞ "thaiivelmhglmetgnembaitsetenroeykdbh"

    cCipher("meeanbsleyamgioxebltirhxttkihnvxmhedtgex", "monty")
    ➞ "meetmebythelakeatmidnightbringshovelxxxx"

    cCipher("Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate", "cake")
    ➞ "ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax"


### Notes ###
N/A