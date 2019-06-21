const hasSpaces = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(hasSpaces('Foo')).toEqual(false);
        expect(hasSpaces('Foo bar')).toEqual(true);
        expect(hasSpaces('Foo ')).toEqual(true);
        expect(hasSpaces(' Foo')).toEqual(true);
        expect(hasSpaces(' ')).toEqual(true);
        expect(hasSpaces('')).toEqual(false);
        expect(hasSpaces(',./;\'[]-=')).toEqual(false);
    });
});
