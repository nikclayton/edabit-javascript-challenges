const filterArray = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(filterArray([1, 2, 'a', 'b'])).toEqual([1, 2]);
        expect(filterArray([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15]);
        expect(filterArray([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123]);
        expect(filterArray(['jsyt', 4, 'yt', 6])).toEqual([4, 6]);
        expect(filterArray(['r', 5, 'y', 'e', 8, 9])).toEqual([5, 8, 9]);
        expect(filterArray(['a', 'e', 'i', 'o', 'u'])).toEqual([]);
        expect(filterArray([4, 'z', 'f', 5])).toEqual([4, 5]);
        expect(filterArray(['abc', 123])).toEqual([123]);
        expect(filterArray(['$%^', 567, '&&&'])).toEqual([567]);
        expect(filterArray(['w', 'r', 'u', 43, 's', 'a', 76, 'd', 88])).toEqual([43, 76, 88]);
    });
});
