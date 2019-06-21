const correctSigns = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(correctSigns('3 < 7 < 11')).toEqual(true);
        expect(correctSigns('13 > 44 > 33 > 1')).toEqual(false);
        expect(correctSigns('1 < 2 < 6 < 9 > 3')).toEqual(true);
        expect(correctSigns('4 > 3 > 2 > 1')).toEqual(true);
        expect(correctSigns('5 < 7 > 1')).toEqual(true);
        expect(correctSigns('5 > 7 > 1')).toEqual(false);
        expect(correctSigns('9 < 9')).toEqual(false);
    });
});
