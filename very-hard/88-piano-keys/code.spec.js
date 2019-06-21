const pianoKeys = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(pianoKeys(1)).toEqual(['A', '0', 'White', '27.50']);
        expect(pianoKeys(15)).toEqual(['B', '1', 'White', '61.74']);
        expect(pianoKeys(0)).toEqual(false);
        expect(pianoKeys(17)).toEqual(['C♯/D♭', '2', 'Black', '69.30']);
        expect(pianoKeys(88)).toEqual(['C', '8', 'White', '4186.01']);
        expect(pianoKeys(100)).toEqual(false);
        expect(pianoKeys(60)).toEqual(['G♯/A♭', '5', 'Black', '830.61']);
        expect(pianoKeys(4)).toEqual(['C', '1', 'White', '32.70']);
        expect(pianoKeys(71)).toEqual(['G', '6', 'White', '1567.98']);
        expect(pianoKeys(16)).toEqual(['C', '2', 'White', '65.41']);
        expect(pianoKeys(29)).toEqual(['C♯/D♭', '3', 'Black', '138.59']);
    });
});
