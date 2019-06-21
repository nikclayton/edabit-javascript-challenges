const hasIdentical = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(hasIdentical([[4, 4, 4, 4], [2, 4, 9, 8], [5, 4, 7, 7], [6, 4, 1, 0]])).toEqual(true);
        expect(hasIdentical([[4, 2, 4, 6, 1], [2, 4, 9, 4, 5], [5, 1, 7, 1, 9], [6, 4, 1, 0, 33], [5, 5, 5, 33, 5]])).toEqual(true);
        expect(hasIdentical([[4, 2], [2, 1]])).toEqual(true);
        expect(hasIdentical([[4, 4, 9, 4], [2, 1, 9, 8], [5, 4, 7, 7], [6, 4, 1, 0]])).toEqual(false);
        expect(hasIdentical([[4, 4], [2, 1]])).toEqual(false);
        expect(hasIdentical([[4, 4, 3], [2, 1, 9], [3, 8, 1]])).toEqual(false);
        expect(hasIdentical([[4, 4, 4], [2, 1, 4]])).toEqual(false);
        expect(hasIdentical([[4, 4, 4]])).toEqual(false);
    });
});
