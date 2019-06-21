const pairs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(pairs([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 7], [2, 6], [3, 5], [4, 4]]);
        expect(pairs([1, 2, 3, 4, 5, 6])).toEqual([[1, 6], [2, 5], [3, 4]]);
        expect(pairs([5, 9, 8, 1, 2])).toEqual([[5, 2], [9, 1], [8, 8]]);
        expect(pairs([5, 6, 7])).toEqual([[5, 7], [6, 6]]);
        expect(pairs([1, 1, 4, 4, 5, 5])).toEqual([[1, 5], [1, 5], [4, 4]]);
        expect(pairs([9, 9, 9, 9, 3, 3, 9])).toEqual([[9, 9], [9, 3], [9, 3], [9, 9]]);
        expect(pairs([5, 6])).toEqual([[5, 6]]);
        expect(pairs([5])).toEqual([[5, 5]]);
        expect(pairs([])).toEqual([]);
    });
});
