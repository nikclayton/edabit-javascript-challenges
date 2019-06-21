const longestRun = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(longestRun([1, 2, 3, 5, 6, 7, 8, 9])).toEqual(5);
        expect(longestRun([1, 2, 3, 10, 11, 15])).toEqual(3);
        expect(longestRun([-7, -6, -5, -4, -3, -2, -1])).toEqual(7);
        expect(longestRun([3, 5, 6, 10, 15])).toEqual(2);
        expect(longestRun([3, 5, 7, 10, 15])).toEqual(1);
        expect(longestRun([5, 4, 3, 2, 1])).toEqual(5);
        expect(longestRun([5, 4, 2, 1])).toEqual(2);
        expect(longestRun([10, 9, 0, 5])).toEqual(2);
        expect(longestRun([1, 2, 3, 2, 1])).toEqual(3);
        expect(longestRun([10, 9, 8, 7, 6, 2, 1])).toEqual(5);
    });
});
