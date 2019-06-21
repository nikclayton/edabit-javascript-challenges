const freeShipping = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(freeShipping({'Shampoo': 5.99, 'Rubber Ducks': 15.99})).toEqual(false);
        expect(freeShipping({'Flatscreen TV': 399.99})).toEqual(true);
        expect(freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99})).toEqual(true);
        expect(freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20})).toEqual(false);
        expect(freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20})).toEqual(true);
    });
});
