const isPandigital = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPandigital(84847473937)).toEqual(false);
        expect(isPandigital(546732965015)).toEqual(false);
        expect(isPandigital(6781235184590)).toEqual(true);
        expect(isPandigital(9432821089765)).toEqual(true);
        expect(isPandigital(629764)).toEqual(false);
        expect(isPandigital(90864523148909)).toEqual(false);
        expect(isPandigital(7296012)).toEqual(false);
        expect(isPandigital(647380265483206)).toEqual(false);
        expect(isPandigital(38165975424790)).toEqual(true);
        expect(isPandigital(8146327815320)).toEqual(false);
        expect(isPandigital(768431605430)).toEqual(false);
        expect(isPandigital(4920124852367763)).toEqual(true);
        expect(isPandigital(60543981597247)).toEqual(true);
        expect(isPandigital(10282343456789)).toEqual(true);
    });
});
