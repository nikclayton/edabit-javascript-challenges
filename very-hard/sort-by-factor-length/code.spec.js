const factorSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(factorSort([1, 2, 31, 4])).toEqual([4, 31, 2, 1]);
        expect(factorSort([5, 7, 9])).toEqual([9, 7, 5]);
        expect(factorSort([15, 8, 2, 3])).toEqual([15, 8, 3, 2]);
        expect(factorSort([1, 2, 3, 7, 11, 13, 16])).toEqual([16, 13, 11, 7, 3, 2, 1]);
        expect(factorSort([1, 5, 25, 17])).toEqual([25, 17, 5, 1]);
        expect(factorSort([1, 5, 4, 17])).toEqual([4, 17, 5, 1]);
    });
});
