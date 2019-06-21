const returnUnique = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])).toEqual([9, 7]);
        expect(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])).toEqual([2, 1]);
        expect(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])).toEqual([5, 6]);
        expect(returnUnique([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4])).toEqual([3, 2]);
        expect(returnUnique([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66])).toEqual([2, 0]);
        expect(returnUnique([-9, -9, -9, 7, -9, -9, 1])).toEqual([7, 1]);
        expect(returnUnique([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3])).toEqual([-19, 4]);
    });
});
