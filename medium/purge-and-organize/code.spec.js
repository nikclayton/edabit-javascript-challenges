const uniqueSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])).toEqual([1, 2, 3, 4, 5, 8, 10]);
        expect(uniqueSort([1, 2, 5, 4, 7, 7, 7])).toEqual([1, 2, 4, 5, 7]);
        expect(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1])).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1])).toEqual([1, 3, 4, 5, 6, 27, 100]);
        expect(uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415])).toEqual([-87, -9, -4.323827, -3.1415, -3.1414, 8]);
    });
});
