Write a function that divides a phrase into word buckets, with each bucket containing **n or fewer characters**. Only include **full words**inside each bucket.


### Examples ###
    bucketize("she sells sea shells by the sea", 10)
    ➞ ["she sells", "sea shells", "by the sea"]

    bucketize("the mouse jumped over the cheese", 7)
    ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

    bucketize("fairy dust coated the air", 20)
    ➞ ["fairy dust coated", "the air"]

    bucketize("a b c d e", 2)
    ➞ ["a", "b", "c", "d", "e"]


### Notes ###
*   Spaces count as **one character**.
*   Trim beginning and end spaces for each word bucket (see final example).
*   If buckets are too small to hold a single word, return an **empty array**.