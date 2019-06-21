const canConcatenate = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])).toEqual(true);
        expect(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7])).toEqual(true);
        expect(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1])).toEqual(true);
        expect(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7])).toEqual(false);
        expect(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7])).toEqual(false);
        expect(canConcatenate([[1, 4], [3]], [1, 3, 4])).toEqual(true);
        expect(canConcatenate([[1, 4], [3]], [1, 2, 3, 4])).toEqual(false);
        expect(canConcatenate([[1, 4], [3]], [4, 3, 1])).toEqual(true);
        expect(canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2])).toEqual(true);
        expect(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2])).toEqual(true);
        expect(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2])).toEqual(true);
    });
});
