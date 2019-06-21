const doubleLetters = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(doubleLetters('loop')).toEqual(true);
        expect(doubleLetters('meeting')).toEqual(true);
        expect(doubleLetters('yummy')).toEqual(true);
        expect(doubleLetters('moo')).toEqual(true);
        expect(doubleLetters('toodles')).toEqual(true);
        expect(doubleLetters('droop')).toEqual(true);
        expect(doubleLetters('loot')).toEqual(true);
        expect(doubleLetters('orange')).toEqual(false);
        expect(doubleLetters('munchkin')).toEqual(false);
        expect(doubleLetters('forestry')).toEqual(false);
        expect(doubleLetters('raindrops')).toEqual(false);
        expect(doubleLetters('gold')).toEqual(false);
        expect(doubleLetters('paradise')).toEqual(false);
        expect(doubleLetters('chicken')).toEqual(false);
    });
});
