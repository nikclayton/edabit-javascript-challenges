const isEmpty = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isEmpty('')).toEqual(true);
        expect(isEmpty(' ')).toEqual(false);
        expect(isEmpty('            ')).toEqual(false);
        expect(isEmpty('38215')).toEqual(false);
        expect(isEmpty('afjabsdf')).toEqual(false);
        expect(isEmpty('!?@&')).toEqual(false);
    });
});
