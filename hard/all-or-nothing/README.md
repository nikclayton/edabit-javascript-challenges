Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a **potentially incomplete**answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Questions with missing answers are marked with an underscore, `"_"`.

    ["A", "_", "C", "_", "B"]   // answer key
    ["A", "D", "C", "E", "B"]   // student's solution

    ➞ true

    // Possible for student to get all questions correct.

    ["B", "_", "B"]   // answer key
    ["B", "D", "C"]   // student's solution

    ➞ false

    // First question is correct but third is wrong, so not possible to score 100%.

    ["T", "_", "F", "F", "F"]   // answer key
    ["F", "F", "T", "T", "T"]   // student's solution

    ➞ true

    // Possible for student to get all questions incorrect.


### Examples ###
    possiblyPerfect(["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ true

    possiblyPerfect(["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ true

    possiblyPerfect(["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ false

    possiblyPerfect(["B", "_"], ["C", "A"]) ➞ true

    possiblyPerfect(["B", "A"], ["C", "A"]) ➞ false

    possiblyPerfect(["B"], ["B"]) ➞ true


### Notes ###
Test has at least one question.