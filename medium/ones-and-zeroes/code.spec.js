const sameLength = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sameLength('10')).toEqual(true);
        expect(sameLength('1010')).toEqual(true);
        expect(sameLength('1100')).toEqual(true);
        expect(sameLength('10101110001100')).toEqual(true);
        expect(sameLength('1111000010101100')).toEqual(true);
        expect(sameLength('1001')).toEqual(false);
        expect(sameLength('101001')).toEqual(false);
        expect(sameLength('101')).toEqual(false);
        expect(sameLength('10010')).toEqual(false);
        expect(sameLength('110')).toEqual(false);
        expect(sameLength('11001')).toEqual(false);
        expect(sameLength('11100011000')).toEqual(false);
    });
});
