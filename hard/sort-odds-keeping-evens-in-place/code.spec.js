const oddSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(oddSort([1, 8, 4, 3, 2, 6, 7, 5])).toEqual([1, 8, 4, 3, 2, 6, 5, 7]);
        expect(oddSort([3, 7, 0, 9, 3, 2, 4, 8])).toEqual([3, 3, 0, 7, 9, 2, 4, 8]);
        expect(oddSort([7, 5, 2, 3, 1])).toEqual([1, 3, 2, 5, 7]);
        expect(oddSort([2, 2, 9, 7, 4, 4, 4, 9])).toEqual([2, 2, 7, 9, 4, 4, 4, 9]);
        expect(oddSort([2, 2, 4, 0, 3, 1])).toEqual([2, 2, 4, 0, 1, 3]);
        expect(oddSort([2, 2, 8, 4])).toEqual([2, 2, 8, 4]);
        expect(oddSort([1, 9, 1])).toEqual([1, 1, 9]);
    });
});
