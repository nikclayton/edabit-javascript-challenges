const magicSquareGame = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(magicSquareGame([2, '100'], [1, '101'])).toEqual(false);
        expect(magicSquareGame([2, '001'], [1, '101'])).toEqual(true);
        expect(magicSquareGame([3, '111'], [2, '011'])).toEqual(true);
        expect(magicSquareGame([1, '010'], [3, '101'])).toEqual(false);
        expect(magicSquareGame([2, '111'], [3, '011'])).toEqual(true);
        expect(magicSquareGame([2, '100'], [3, '110'])).toEqual(false);
        expect(magicSquareGame([1, '001'], [1, '101'])).toEqual(false);
        expect(magicSquareGame([2, '100'], [2, '101'])).toEqual(true);
        expect(magicSquareGame([3, '010'], [1, '110'])).toEqual(true);
        expect(magicSquareGame([1, '100'], [2, '110'])).toEqual(false);
        expect(magicSquareGame([2, '111'], [3, '011'])).toEqual(true);
        expect(magicSquareGame([2, '001'], [2, '101'])).toEqual(true);
        expect(magicSquareGame([1, '100'], [2, '101'])).toEqual(false);
        expect(magicSquareGame([3, '001'], [3, '011'])).toEqual(true);
        expect(magicSquareGame([3, '111'], [1, '110'])).toEqual(false);
        expect(magicSquareGame([2, '100'], [2, '101'])).toEqual(true);
    });
});
