const mysteryFunc = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mysteryFunc(832)).toEqual(594);
        expect(mysteryFunc(51)).toEqual(36);
        expect(mysteryFunc(7977)).toEqual(198);
        expect(mysteryFunc(1)).toEqual(0);
        expect(mysteryFunc(665)).toEqual(99);
        expect(mysteryFunc(149)).toEqual(0);
    });
});
