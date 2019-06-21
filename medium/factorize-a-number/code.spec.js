const factorize = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(factorize(12)).toEqual([1, 2, 3, 4, 6, 12]);
        expect(factorize(4)).toEqual([1, 2, 4]);
        expect(factorize(17)).toEqual([1, 17]);
        expect(factorize(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
        expect(factorize(1)).toEqual([1]);
    });
});
