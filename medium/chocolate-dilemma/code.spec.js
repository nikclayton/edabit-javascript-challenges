const testFairness = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]])).toEqual(false);
        expect(testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]])).toEqual(true);
        expect(testFairness([[1, 2], [2, 1]], [[2, 2]])).toEqual(true);
        expect(testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]])).toEqual(false);
        expect(testFairness([[2, 4], [1, 1], [11, 1]], [[2, 2], [4, 4]])).toEqual(true);
    });
});
