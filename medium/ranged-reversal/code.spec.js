const rangedReversal = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(rangedReversal([1, 2, 3, 4, 5, 6], 1, 3)).toEqual([1, 4, 3, 2, 5, 6]);
        expect(rangedReversal([1, 2, 3, 4, 5, 6], 0, 4)).toEqual([5, 4, 3, 2, 1, 6]);
        expect(rangedReversal([9, 8, 7, 4], 0, 0)).toEqual([9, 8, 7, 4]);
        expect(rangedReversal([9, 8, 7, 4], 0, 3)).toEqual([4, 7, 8, 9]);
        expect(rangedReversal([8, 9, 3, 3, 2, 7, 4], 5, 6)).toEqual([8, 9, 3, 3, 2, 4, 7]);
        expect(rangedReversal([1, 2], 0, 1)).toEqual([2, 1]);
        expect(rangedReversal([7, 8, 9, 4], 1, 2)).toEqual([7, 9, 8, 4]);
    });
});
