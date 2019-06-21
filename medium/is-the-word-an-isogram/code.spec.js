const isIsogram = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isIsogram('Algorism')).toEqual(true);
        expect(isIsogram('PasSword')).toEqual(false);
        expect(isIsogram('Dermatoglyphics')).toEqual(true);
        expect(isIsogram('Cat')).toEqual(true);
        expect(isIsogram('Filmography')).toEqual(true);
        expect(isIsogram('Consecutive')).toEqual(false);
        expect(isIsogram('Bankruptcies')).toEqual(true);
        expect(isIsogram('Unforgivable')).toEqual(true);
        expect(isIsogram('Unpredictably')).toEqual(true);
        expect(isIsogram('Moose')).toEqual(false);
    });
});
