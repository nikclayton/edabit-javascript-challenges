const mysteryFunc = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mysteryFunc(3)).toEqual(21);
        expect(mysteryFunc(9)).toEqual(2221);
        expect(mysteryFunc(15)).toEqual(2227);
        expect(mysteryFunc(17)).toEqual(22221);
        expect(mysteryFunc(19)).toEqual(22223);
        expect(mysteryFunc(24)).toEqual(22228);
        expect(mysteryFunc(35)).toEqual(222223);
    });
});
