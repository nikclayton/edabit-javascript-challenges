const check = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(check([1, 2, 3, 4, 5], 3)).toEqual(true);
        expect(check([1, 1, 2, 1, 1], 3)).toEqual(false);
        expect(check([1, 1, 2, 1, 5, 4, 7], 7)).toEqual(true);
        expect(check([1, 1, 2, 1, 5, 4, 7], 8)).toEqual(false);
        expect(check([5, 5, 5, 6], 5)).toEqual(true);
        expect(check([], 5)).toEqual(false);
    });
});
