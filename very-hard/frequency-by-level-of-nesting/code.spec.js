const freqCount = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(freqCount([1, 1, 1, 1], 1)).toEqual([[0, 4]]);
        expect(freqCount([1, 1, 2, 2], 1)).toEqual([[0, 2]]);
        expect(freqCount([1, 1, 2, [1]], 1)).toEqual([[0, 2], [1, 1]]);
        expect(freqCount([1, 1, 2, [[1]]], 1)).toEqual([[0, 2], [1, 0], [2, 1]]);
        expect(freqCount([[[1]]], 1)).toEqual([[0, 0], [1, 0], [2, 1]]);
        expect(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)).toEqual([[0, 1], [1, 2], [2, 3]]);
        expect(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)).toEqual([[0, 3], [1, 4], [2, 0]]);
        expect(freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)).toEqual([[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]);
    });
});
