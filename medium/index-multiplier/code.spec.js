const indexMultiplier = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(indexMultiplier([9, 3, 7, -7])).toEqual(-4);
        expect(indexMultiplier([3, 8, 6, -4])).toEqual(8);
        expect(indexMultiplier([10, -9, -2, 0, 2])).toEqual(-5);
        expect(indexMultiplier([4, 4, 2, 2, -4])).toEqual(-2);
        expect(indexMultiplier([9, 4, 7, 5, -1, -3])).toEqual(14);
        expect(indexMultiplier([-9, 5, 9, 5, -7, 7])).toEqual(45);
        expect(indexMultiplier([-1, -2, 8, -5])).toEqual(-1);
        expect(indexMultiplier([7, 10, -5, -4, 6, 2])).toEqual(22);
        expect(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1])).toEqual(16);
        expect(indexMultiplier([-2, 5, -7, -23, 0, 14])).toEqual(-8);
        expect(indexMultiplier([53, -43, 39, -2, -11, 3])).toEqual(0);
        expect(indexMultiplier([40, 32, -18, 48, -15])).toEqual(80);
        expect(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34])).toEqual(170);
        expect(indexMultiplier([-21, 30, 20, 6, -16])).toEqual(24);
        expect(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20])).toEqual(-183);
        expect(indexMultiplier([])).toEqual(0);
    });
});
