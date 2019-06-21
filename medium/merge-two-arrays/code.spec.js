const mergeArrays = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])).toEqual(['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
        expect(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f'])).toEqual([1, 'a', 2, 'b', 3, 'c', 'd', 'e', 'f']);
        expect(mergeArrays(['f', 'd', 'w', 't'], [5, 3, 7, 8])).toEqual(['f', 5, 'd', 3, 'w', 7, 't', 8]);
        expect(mergeArrays([4, 54, 7, 87], ['t', 'd', 't'])).toEqual([4, 't', 54, 'd', 7, 't', 87]);
        expect(mergeArrays(['c'], [3])).toEqual(['c', 3]);
        expect(mergeArrays([4, 3, 2, 1], ['r', 'd'])).toEqual([4, 'r', 3, 'd', 2, 1]);
        expect(mergeArrays(['u', 'k', 'c'], [2, 8, 30])).toEqual(['u', 2, 'k', 8, 'c', 30]);
        expect(mergeArrays(['e'], [1, 2, 3, 4, 5, 6, 7])).toEqual(['e', 1, 2, 3, 4, 5, 6, 7]);
        expect(mergeArrays([1, 2, 3, 4, 5, 6, 7], ['e'])).toEqual([1, 'e', 2, 3, 4, 5, 6, 7]);
        expect(mergeArrays([123, 456], ['c', 'b', 'a'])).toEqual([123, 'c', 456, 'b', 'a']);
    });
});
