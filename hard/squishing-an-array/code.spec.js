const squish = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(squish([1, 2, 3, 4, 5], 'left')).toEqual([[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]);
        expect(squish([1, 0, 2, -3], 'left')).toEqual([[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]);
        expect(squish([4, 9, -3, 2, 5], 'left')).toEqual([[4, 9, -3, 2, 5], [13, -3, 2, 5], [10, 2, 5], [12, 5], [17]]);
        expect(squish([8, -7, 6, 1, 0, 2], 'left')).toEqual([[8, -7, 6, 1, 0, 2], [1, 6, 1, 0, 2], [7, 1, 0, 2], [8, 0, 2], [8, 2], [10]]);
        expect(squish([8, 7], 'left')).toEqual([[8, 7], [15]]);
        expect(squish([8], 'left')).toEqual([[8]]);
        expect(squish([], 'left')).toEqual([]);
        expect(squish([1, 2, 3, 4, 5], 'right')).toEqual([[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]);
        expect(squish([1, 0, 2, -3], 'right')).toEqual([[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]);
        expect(squish([4, 9, -3, 2, 5], 'right')).toEqual([[4, 9, -3, 2, 5], [4, 9, -3, 7], [4, 9, 4], [4, 13], [17]]);
        expect(squish([8, -7, 6, 1, 0, 2], 'right')).toEqual([[8, -7, 6, 1, 0, 2], [8, -7, 6, 1, 2], [8, -7, 6, 3], [8, -7, 9], [8, 2], [10]]);
        expect(squish([8, 7], 'right')).toEqual([[8, 7], [15]]);
        expect(squish([8], 'right')).toEqual([[8]]);
        expect(squish([], 'right')).toEqual([]);
    });
});
