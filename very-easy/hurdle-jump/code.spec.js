const hurdleJump = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(hurdleJump([1, 2, 3, 4, 5], 5)).toEqual(true);
        expect(hurdleJump([5, 5, 3, 4, 5], 3)).toEqual(false);
        expect(hurdleJump([5, 4, 5, 6], 10)).toEqual(true);
        expect(hurdleJump([1, 2, 1], 1)).toEqual(false);
        expect(hurdleJump([3, 3, 3], 4)).toEqual(true);
        expect(hurdleJump([4, 4], 3)).toEqual(false);
        expect(hurdleJump([], 4)).toEqual(true);
    });
});
