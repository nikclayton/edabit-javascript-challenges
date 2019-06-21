const countOnes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countOnes([[1, 0, 1], [0, 0, 0], [0, 0, 1]])).toEqual(3);
        expect(countOnes([[1, 1, 1], [0, 0, 1], [1, 1, 1]])).toEqual(7);
        expect(countOnes([[1, 2, 3], [0, 2, 1], [5, 7, 33]])).toEqual(2);
        expect(countOnes([[5, 2, 3], [0, 2, 5], [5, 7, 33]])).toEqual(0);
        expect(countOnes([[5, 2], [0, 2], [5, 1]])).toEqual(1);
        expect(countOnes([[1, 1], [0, 1]])).toEqual(3);
        expect(countOnes([[0, 1], [0, 0]])).toEqual(1);
    });
});
