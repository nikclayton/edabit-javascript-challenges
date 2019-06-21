const sumOfEvens = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sumOfEvens([[1, 5, 1, 3], [4, 1, 2, 0], [6, 9, 7, 4], [5, 1, 2, 6]])).toEqual(24);
        expect(sumOfEvens([[1, 0, 1], [33, 1, 2], [15, 9, 1], [5, 1, 979]])).toEqual(2);
        expect(sumOfEvens([[2, 19, 5, 43], [67, 2, 0, 12]])).toEqual(16);
        expect(sumOfEvens([[1, 3, 7, 9], [11, 13, 15, 17], [19, 21, 23, 25]])).toEqual(0);
        expect(sumOfEvens([[], [], []])).toEqual(0);
    });
});
