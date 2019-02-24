
Given a `Date()` object, return the date from three days prior as a string: `"2016-01-19"`.

### Examples

```
threeDaysAgo(new Date(2018, 0, 1)) ➞ "2017-12-29"

threeDaysAgo(new Date(2015, 5, 17)) ➞ "2015-06-14"

threeDaysAgo(new Date(1965, 3, 15))➞ "1965-04-12"
```

### Notes
- Your function must work in the past, present and future.- JavaScript months are zero based.- Your output should NOT be zero based: `2016, 0, 19` == `"2016-01-19"`.