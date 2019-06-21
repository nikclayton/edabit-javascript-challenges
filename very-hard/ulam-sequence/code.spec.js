const ulam = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(ulam(4)).toEqual(4);
        expect(ulam(9)).toEqual(16);
        expect(ulam(38)).toEqual(180);
        expect(ulam(99)).toEqual(688);
        expect(ulam(206)).toEqual(1856);
        expect(ulam(495)).toEqual(5597);
        expect(ulam(577)).toEqual(6782);
    });
});
