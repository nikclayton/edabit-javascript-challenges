const countBoomerangs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1])).toEqual(2);
        expect(countBoomerangs([5, 6, 6, 7, 6, 3, 9])).toEqual(1);
        expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toEqual(0);
        expect(countBoomerangs([5, 9, 5, 9, 5])).toEqual(3);
        expect(countBoomerangs([4, 4, 4, 8, 4, 8, 4])).toEqual(3);
        expect(countBoomerangs([2, 2, 2, 2, 2, 2, 3])).toEqual(0);
        expect(countBoomerangs([2, 2, 2, 2, 3, 2, 3])).toEqual(2);
        expect(countBoomerangs([1, 2, 1, 1, 1, 2, 1])).toEqual(2);
        expect(countBoomerangs([5, 1, 1, 1, 1, 4, 1])).toEqual(1);
        expect(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])).toEqual(3);
        expect(countBoomerangs([1, 7, 1, 7, 1, 7, 1])).toEqual(5);
        expect(countBoomerangs([5, 5, 5])).toEqual(0);
    });
});
