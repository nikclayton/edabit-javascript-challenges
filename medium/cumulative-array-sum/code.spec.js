const cumulativeSum = require('./code');

describe('Tests', () => {
    test('Should return an empty array if given an empty array', () => {
        expect(cumulativeSum([])).toEqual([]);
    });

test('Should work with 1 value', () => {
        expect(cumulativeSum([1])).toEqual([1]);
    });

test('Should work with multiple values', () => {
        expect(cumulativeSum([1, 2, 3])).toEqual([1, 3, 6]);
    });

test('Should work with multiple negative values', () => {
        expect(cumulativeSum([-1, -2, -3])).toEqual([-1, -3, -6]);
    });

test('Should work with multiple positive and negative values', () => {
        expect(cumulativeSum([1, -2, 3])).toEqual([1, -1, 2]);
    });

test('Should work with long array', () => {
        expect(cumulativeSum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2])).toEqual([3, 6, 4, 412, 415, 418, 418, 484, 486, 484, 486, 489, 493, 495, 448, 451, 454, 456]);
    });
});
