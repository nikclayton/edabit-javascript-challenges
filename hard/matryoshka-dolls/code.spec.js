const matryoshka = require('./code');

describe('Tests', () => {
    test('cannot be overlapping', () => {
        expect(matryoshka([[6, 2], [9, 4]])).toEqual(false);
    });

test('must be strictly nested', () => {
        expect(matryoshka([[7, 1], [7, 6, 5, 4, 3, 2], [6, 3], [4, 5]])).toEqual(false);
    });

test('must be strictly nested', () => {
        expect(matryoshka([[5, 1], [4, 2], [4, 2]])).toEqual(false);
    });

test('must be strictly nested', () => {
        expect(matryoshka([[1, 2, 3, 4], [2, 3, 4]])).toEqual(false);
    });

test('cannot be overlapping', () => {
        expect(matryoshka([[1, 50, 100], [3, 25, 75], [10, 40, 50], [25, 55]])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(matryoshka([[1, 2, 3, 4, 5, 6, 7, 8], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6], [4, 5]])).toEqual(true);
        expect(matryoshka([[4, 5], [2, 6], [1, 9], [-5, 10, 11]])).toEqual(true);
        expect(matryoshka([[3, 3], [4, 4], [5, 5, 5]])).toEqual(false);
        expect(matryoshka([[1, 1, 1, 1, 2], [3, 2, 5, 0], [-1, 500]])).toEqual(true);
        expect(matryoshka([[1, 8], [2, 3, 4, 5, 6, 7], [3, 6], [4, 5]])).toEqual(true);
        expect(matryoshka([[1, 5], [2, 6], [3, 7]])).toEqual(false);
        expect(matryoshka([[5, 1], [4, 2], [3, 3]])).toEqual(true);
        expect(matryoshka([[5, 1], [4, 2], [3, 3, 3, 3, 3, 3, 3]])).toEqual(true);
        expect(matryoshka([[1, 2, 3, 4], [2, 3]])).toEqual(true);
        expect(matryoshka([[1, 50, 100], [3, 25, 75], [10, 40, 50], [25, 45]])).toEqual(true);
    });
});
