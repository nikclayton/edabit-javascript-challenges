const numberSyllables = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numberSyllables('buf-fet')).toEqual(2);
        expect(numberSyllables('beau-ti-ful')).toEqual(3);
        expect(numberSyllables('mon-u-men-tal')).toEqual(4);
        expect(numberSyllables('on-o-mat-o-poe-ia')).toEqual(6);
        expect(numberSyllables('o-ver-ly')).toEqual(3);
        expect(numberSyllables('pas-try')).toEqual(2);
        expect(numberSyllables('flu-id')).toEqual(2);
        expect(numberSyllables('syl-la-ble')).toEqual(3);
    });
});
