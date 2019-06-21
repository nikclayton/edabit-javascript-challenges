const isCircular = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]])).toEqual(true);
        expect(isCircular([[1, 2, 7], [7, 9, 3], [3], [3, 4], [4, 2, 1]])).toEqual(true);
        expect(isCircular([[1, 2], [2, 3], [3, 4], [4, 5]])).toEqual(false);
        expect(isCircular([[9, 9], [9, 2], [2, 9], [9, 5], [5, 9], [9, 6], [6, 9]])).toEqual(true);
        expect(isCircular([[1, 2], [4, 1], [3, 4], [2, 3]])).toEqual(true);
        expect(isCircular([[1, 1], [1, 2]])).toEqual(false);
        expect(isCircular([[6, 7, 8, 9], [1, 2, 3, 4, 5, 6], [6, 6, 9], [9, 0, 1]])).toEqual(false);
        expect(isCircular([[2, 1], [1, 2]])).toEqual(true);
        expect(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]])).toEqual(false);
    });
});
