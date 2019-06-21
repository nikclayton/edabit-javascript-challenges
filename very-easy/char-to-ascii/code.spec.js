const ctoa = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(ctoa(' ')).toEqual(32);
        expect(ctoa('A')).toEqual(65);
        expect(ctoa(']')).toEqual(93);
        expect(ctoa('^')).toEqual(94);
        expect(ctoa('c')).toEqual(99);
    });
});
