const allPairs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(allPairs([2, 4, 5, 3], 7)).toEqual([[2, 5], [3, 4]]);
        expect(allPairs([5, 3, 9, 2, 1], 3)).toEqual([[1, 2]]);
        expect(allPairs([4, 5, 1, 3, 6, 8], 9)).toEqual([[1, 8], [3, 6], [4, 5]]);
        expect(allPairs([5, 2], 14)).toEqual([]);
        expect(allPairs([5, 5, 2], 14)).toEqual([]);
        expect(allPairs([8, 7, 7, 2, 4, 6], 14)).toEqual([[6, 8], [7, 7]]);
        expect(allPairs([8, 7, 2, 4, 6], 14)).toEqual([[6, 8]]);
        expect(allPairs([1, 3, 5, 4, 0], 4)).toEqual([[0, 4], [1, 3]]);
        expect(allPairs([1, 3, 5, 4, 0, 2], 4)).toEqual([[0, 4], [1, 3]]);
        expect(allPairs([1, 3, 5, 4, 0, 2, 2], 4)).toEqual([[0, 4], [1, 3], [2, 2]]);
    });
});
