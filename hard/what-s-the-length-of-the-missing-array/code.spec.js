const findMissing = require('./code');

describe('Tests', () => {
    test('When the main array is empty, return false.', () => {
        expect(findMissing([])).toEqual(false);
    });

test('Return false if you are given null as an argument.', () => {
        expect(findMissing(undefined)).toEqual(false);
    });

test('If an array within the parent array is empty, return false.', () => {
        expect(findMissing([[], [1, 2, 2]])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(findMissing([[1], [1, 2], [4, 5, 1, 1], [5, 6, 7, 8, 9]])).toEqual(3);
        expect(findMissing([[5, 6, 7, 8, 9], [1, 2], [4, 5, 1, 1], [1]])).toEqual(3);
        expect(findMissing([[4, 4, 4, 4], [1], [3, 3, 3]])).toEqual(2);
        expect(findMissing([[false], [false, false, false]])).toEqual(2);
        expect(findMissing([['f', 'r', 's'], ['d', 'e'], ['a', 'f', 'b', 'n'], ['z'], ['fg', 'gty', 'd', 'dfr', 'dr', 'q']])).toEqual(5);
        expect(findMissing([[5, 2, 9], [4, 5, 1, 1, 5, 6], [1, 1], [5, 6, 7, 8, 9]])).toEqual(4);
    });
});
