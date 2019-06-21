const lcm = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(lcm(9, 18)).toEqual(18);
        expect(lcm(8, 5)).toEqual(40);
        expect(lcm(17, 11)).toEqual(187);
        expect(lcm(17, 5)).toEqual(85);
        expect(lcm(3, 12)).toEqual(12);
        expect(lcm(9, 9)).toEqual(9);
    });
});
