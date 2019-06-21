const boundSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(boundSort([1, 6, 5, 3, 8, 9], [0, 3])).toEqual(true);
        expect(boundSort([1, 6, 5, 3, 8, 9], [0, 2])).toEqual(false);
        expect(boundSort([1, 9, 2, 5, 7], [0, 4])).toEqual(true);
        expect(boundSort([1, 9, 2, 5, 7], [0, 3])).toEqual(false);
        expect(boundSort([1, 2, 3, 4, 5, 8, 9], [0, 1])).toEqual(true);
        expect(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 4])).toEqual(true);
        expect(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 3])).toEqual(false);
    });
});
