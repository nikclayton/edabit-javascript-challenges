const almostSorted = require('./code');

describe('Tests', () => {
    test('remove 80 should work', () => {
        expect(almostSorted([1, 3, 5, 9, 11, 80, 15, 33, 37, 41])).toEqual(true);
    });

test('remove 7 should work', () => {
        expect(almostSorted([6, 5, 4, 7, 3])).toEqual(true);
    });

test('numbers should not be completely sorted', () => {
        expect(almostSorted([6, 4, 2, 0])).toEqual(false);
    });

test('remove 1 should work', () => {
        expect(almostSorted([9, 1, 8, 2])).toEqual(true);
    });

test('remove 44 should work', () => {
        expect(almostSorted([1, 3, 9, 44, 15, 17, 33])).toEqual(true);
    });

test('remove -1 should work', () => {
        expect(almostSorted([5, 4, 3, 2, -1, 0])).toEqual(true);
    });

test('remove 5 should work', () => {
        expect(almostSorted([5, 2, 3, 4])).toEqual(true);
    });

test('numbers should not be completely sorted', () => {
        expect(almostSorted([-3, -4, -5, -7])).toEqual(false);
    });

test('numbers should not be completed sorted', () => {
        expect(almostSorted([5, 6, 7, 8])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(almostSorted([7, 8, 9, 3, 10, 11, 12, 2])).toEqual(false);
        expect(almostSorted([8, 3, 7, 4, 9])).toEqual(false);
        expect(almostSorted([9, 1, 8, 2, 7, 3])).toEqual(false);
    });
});
