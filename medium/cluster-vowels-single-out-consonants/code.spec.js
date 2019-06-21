const split = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(split('beautifully')).toEqual(['b', 'eau', 't', 'i', 'f', 'u', 'l', 'l', 'y']);
        expect(split('spoonful')).toEqual(['s', 'p', 'oo', 'n', 'f', 'u', 'l']);
        expect(split('swimming')).toEqual(['s', 'w', 'i', 'm', 'm', 'i', 'n', 'g']);
        expect(split('courage')).toEqual(['c', 'ou', 'r', 'a', 'g', 'e']);
        expect(split('cooing')).toEqual(['c', 'ooi', 'n', 'g']);
    });
});
