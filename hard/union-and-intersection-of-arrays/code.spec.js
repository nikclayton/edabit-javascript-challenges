const intersectionUnion = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9])).toEqual([[4], [1, 2, 3, 4, 5, 9]]);
        expect(intersectionUnion([1, 2, 3], [4, 5, 6])).toEqual([[], [1, 2, 3, 4, 5, 6]]);
        expect(intersectionUnion([1, 1], [1, 1, 1, 1])).toEqual([[1], [1]]);
        expect(intersectionUnion([5, 5], [5, 6])).toEqual([[5], [5, 6]]);
        expect(intersectionUnion([7, 8, 9, 6], [9, 7, 6, 8])).toEqual([[6, 7, 8, 9], [6, 7, 8, 9]]);
        expect(intersectionUnion([4, 1, 1, 2], [1, 4, 4, 4, 4, 4, 4])).toEqual([[1, 4], [1, 2, 4]]);
    });
});
