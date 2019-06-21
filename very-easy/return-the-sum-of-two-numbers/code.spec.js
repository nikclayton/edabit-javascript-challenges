const addition = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(addition(2, 3)).toEqual(5);
        expect(addition(-3, -6)).toEqual(-9);
        expect(addition(7, 3)).toEqual(10);
    });
});
