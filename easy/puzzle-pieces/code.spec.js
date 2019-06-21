const puzzlePieces = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])).toEqual(true);
        expect(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])).toEqual(true);
        expect(puzzlePieces([2, 1, 1], [-2, -1, -1])).toEqual(true);
        expect(puzzlePieces([2], [-2])).toEqual(true);
        expect(puzzlePieces([5, -1], [-6, 0])).toEqual(true);
        expect(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1, 1])).toEqual(true);
        expect(puzzlePieces([1, 2], [-1, -1])).toEqual(false);
        expect(puzzlePieces([9, 8, 7], [7, 8, 9, 10])).toEqual(false);
        expect(puzzlePieces([9, 8, 7], [7, 8, 9, 16])).toEqual(false);
        expect(puzzlePieces([1, 1, 1], [1, 1, 2])).toEqual(false);
        expect(puzzlePieces([1, 8, 1], [1, -8, -1])).toEqual(false);
        expect(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 0, 1, 1])).toEqual(false);
        expect(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1])).toEqual(false);
    });
});
