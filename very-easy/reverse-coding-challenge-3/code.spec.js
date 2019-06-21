const mysteryFunc = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mysteryFunc([5, 7, 8, 2, 1], 2)).toEqual([1, 1, 0, 0, 1]);
        expect(mysteryFunc([9, 8, 16, 47], 4)).toEqual([1, 0, 0, 3]);
        expect(mysteryFunc([17, 11, 99, 55, 23, 1], 5)).toEqual([2, 1, 4, 0, 3, 1]);
        expect(mysteryFunc([6, 1], 7)).toEqual([6, 1]);
        expect(mysteryFunc([3, 2, 9], 3)).toEqual([0, 2, 0]);
        expect(mysteryFunc([48, 22, 0, 19, 33, 100], 10)).toEqual([8, 2, 0, 9, 3, 0]);
    });
});
