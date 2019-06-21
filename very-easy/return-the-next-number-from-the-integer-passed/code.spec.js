const addition = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(addition(2)).toEqual(3);
        expect(addition(-9)).toEqual(-8);
        expect(addition(0)).toEqual(1);
    });
});
