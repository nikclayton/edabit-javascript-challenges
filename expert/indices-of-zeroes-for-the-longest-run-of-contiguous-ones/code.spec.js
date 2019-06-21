const zeroIndices = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1)).toEqual([1]);
        expect(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 2)).toEqual([1, 4]);
        expect(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 3)).toEqual([1, 4, 5]);
        expect(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 4)).toEqual([1, 4, 5, 6]);
        expect(zeroIndices([1, 1, 0, 1, 1, 0, 0, 1], 1)).toEqual([2]);
        expect(zeroIndices([0, 1, 1, 1, 1, 0, 0, 0], 1)).toEqual([0]);
        expect(zeroIndices([0, 1, 1, 0, 0, 0, 1, 1, 1], 1)).toEqual([5]);
        expect(zeroIndices([1, 0, 1, 0, 1, 0], 1)).toEqual([1]);
        expect(zeroIndices([1, 0, 0, 0, 0, 1], 1)).toEqual([1]);
        expect(zeroIndices([1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1], 2)).toEqual([1, 2]);
        expect(zeroIndices([1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1], 2)).toEqual([7, 8]);
        expect(zeroIndices([1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], 2)).toEqual([6, 7]);
        expect(zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3)).toEqual([6, 7, 9]);
        expect(zeroIndices([1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 3)).toEqual([4, 5, 7]);
        expect(zeroIndices([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 3)).toEqual([1, 2, 3]);
        expect(zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3)).toEqual([7, 8, 9]);
        expect(zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0], 4)).toEqual([7, 8, 9, 11]);
        expect(zeroIndices([1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0], 4)).toEqual([8, 9, 10, 11]);
        expect(zeroIndices([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 4)).toEqual([2, 3, 4, 5]);
    });
});
