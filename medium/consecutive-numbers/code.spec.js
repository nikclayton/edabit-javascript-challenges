const cons = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(cons([5, 1, 4, 3, 2])).toEqual(true);
        expect(cons([55, 59, 58, 56, 57])).toEqual(true);
        expect(cons([-3, -2, -1, 1, 0])).toEqual(true);
        expect(cons([5, 1, 4, 3, 2, 8])).toEqual(false);
        expect(cons([5, 6, 7, 8, 9, 9])).toEqual(false);
        expect(cons([5, 3])).toEqual(false);
    });
});
