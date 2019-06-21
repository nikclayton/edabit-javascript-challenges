const canAlternate = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canAlternate('0001111')).toEqual(true);
        expect(canAlternate('01001')).toEqual(true);
        expect(canAlternate('010001')).toEqual(false);
        expect(canAlternate('0100110111')).toEqual(false);
        expect(canAlternate('10101010')).toEqual(true);
        expect(canAlternate('010101000')).toEqual(false);
        expect(canAlternate('0111')).toEqual(false);
        expect(canAlternate('00')).toEqual(false);
        expect(canAlternate('1111')).toEqual(false);
        expect(canAlternate('101')).toEqual(true);
    });
});
