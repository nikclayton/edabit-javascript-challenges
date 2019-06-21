const countdown = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countdown(3)).toEqual([3, 2, 1, 0]);
        expect(countdown(20)).toEqual([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        expect(countdown(1)).toEqual([1, 0]);
        expect(countdown(0)).toEqual([0]);
    });
});
