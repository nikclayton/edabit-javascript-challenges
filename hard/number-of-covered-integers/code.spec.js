const coveredIntegers = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(coveredIntegers([[80, 81], [1, 2], [9, 11]])).toEqual(7);
        expect(coveredIntegers([[3, 6], [4, 6], [5, 6]])).toEqual(4);
        expect(coveredIntegers([[1, 2], [1, 2]])).toEqual(2);
        expect(coveredIntegers([[1, 11]])).toEqual(11);
        expect(coveredIntegers([[8, 9], [102, 104]])).toEqual(5);
        expect(coveredIntegers([[1, 1], [5, 5], [8, 8]])).toEqual(3);
        expect(coveredIntegers([[0, 5], [5, 5], [8, 8]])).toEqual(7);
        expect(coveredIntegers([[1, 5], [3, 5], [4, 6], [5, 7]])).toEqual(7);
        expect(coveredIntegers([[-3, 10], [-2, 9], [-1, 8], [0, 7], [1, 6], [2, 5], [3, 4]])).toEqual(14);
    });
});
