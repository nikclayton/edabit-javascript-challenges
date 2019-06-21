const profitableGamble = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(profitableGamble(0.2, 50, 9)).toEqual(true);
        expect(profitableGamble(0.9, 1, 2)).toEqual(false);
        expect(profitableGamble(0.9, 3, 2)).toEqual(true);
        expect(profitableGamble(0.33, 10, 3.3)).toEqual(true);
        expect(profitableGamble(0, 1000, 0.01)).toEqual(false);
        expect(profitableGamble(0.1, 1000, 7)).toEqual(true);
        expect(profitableGamble(0, 0, 0)).toEqual(false);
    });
});
