const transposeMatrix = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(transposeMatrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]])).toEqual([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
        expect(transposeMatrix([[1, 1, 1], [2, 2, 2]])).toEqual([[1, 2], [1, 2], [1, 2]]);
        expect(transposeMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]);
    });
});
