const miniPeaks = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])).toEqual([5, 9]);
        expect(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])).toEqual([2, 3, 5]);
        expect(miniPeaks([1, 2, 3, 4, 5, 6])).toEqual([]);
        expect(miniPeaks([6, 4, 3])).toEqual([]);
        expect(miniPeaks([1, 1, 1, 1, 2, 1, 1, 1])).toEqual([2]);
        expect(miniPeaks([1, 9, 1, 8, 2, 7, 6])).toEqual([9, 8, 7]);
        expect(miniPeaks([7, 8, 7, 8, 7, 8, 5, 1, 2, 0])).toEqual([8, 8, 8, 2]);
    });
});
