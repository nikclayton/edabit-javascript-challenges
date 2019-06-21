const isFourLetters = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isFourLetters(['Ryan', 'Kieran', 'Jason', 'Matt'])).toEqual(['Ryan', 'Matt']);
        expect(isFourLetters(['Tomato', 'Potato', 'Pair'])).toEqual(['Pair']);
        expect(isFourLetters(['Kangaroo', 'Bear', 'Fox'])).toEqual(['Bear']);
        expect(isFourLetters(['Red', 'Blue', 'Green', 'Pink'])).toEqual(['Blue', 'Pink']);
        expect(isFourLetters(['is', 'up', 'two', 'elephant'])).toEqual([]);
        expect(isFourLetters([])).toEqual([]);
        expect(isFourLetters(['jazz', 'quiz', 'jump'])).toEqual(['jazz', 'quiz', 'jump']);
        expect(isFourLetters([''])).toEqual([]);
        expect(isFourLetters(['Broccoli', 'Carrot', 'Spinach'])).toEqual([]);
    });
});
