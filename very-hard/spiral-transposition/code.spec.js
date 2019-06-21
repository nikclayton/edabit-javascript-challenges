const spiral = require('./code');

describe('Tests', () => {
    test('Should work with a 2x2 array', () => {
        expect(spiral([[7, 2], [5, 0]])).toEqual([7, 2, 0, 5]);
    });

test('Should work with a 3x3 array', () => {
        expect(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

test('Should work with a 3x3 array', () => {
        expect(spiral([[1, 9, 9], [2, 4, 9], [7, 3, 9]])).toEqual([1, 9, 9, 9, 9, 3, 7, 2, 4]);
    });

test('Should work with a 4x4 array', () => {
        expect(spiral([[6, 4, 3, 9], [2, 5, 7, 1], [8, 6, 2, 3], [4, 5, 9, 1]])).toEqual([6, 4, 3, 9, 1, 3, 1, 9, 5, 4, 8, 2, 5, 7, 2, 6]);
    });

test('Should work with a 5x5 array', () => {
        expect(spiral([[4, 1, 55, 5, 9], [16, 7, 6, 5, 3], [8, 20, 2, 0, 8], [2, 9, 9, 1, 11], [6, 5, 3, 18, 5]])).toEqual([4, 1, 55, 5, 9, 3, 8, 11, 5, 18, 3, 5, 6, 2, 8, 16, 7, 6, 5, 0, 1, 9, 9, 20, 2]);
    });

test('Should work when there are more rows than collumns', () => {
        expect(spiral([[1, 5], [9, 2], [7, 3]])).toEqual([1, 5, 2, 3, 7, 9]);
    });

test('Should work when there are more collumns than rows', () => {
        expect(spiral([[2, 4, 6, 8], [7, 3, 0, 5]])).toEqual([2, 4, 6, 8, 5, 0, 3, 7]);
    });
});
