const minimumRemovals = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minimumRemovals([1, 2, 3, 4, 5])).toEqual(1);
        expect(minimumRemovals([5, 7, 9, 11])).toEqual(0);
        expect(minimumRemovals([5, 7, 9, 12])).toEqual(1);
        expect(minimumRemovals([5, 8, 8, 8])).toEqual(1);
        expect(minimumRemovals([5, 8, 8, 8, 9, 9])).toEqual(1);
        expect(minimumRemovals([9, 8, 8, 8, 9, 9])).toEqual(1);
        expect(minimumRemovals([5, 5, 4, 4, 3, 3])).toEqual(0);
        expect(minimumRemovals([5, 3, 4, 4, 3])).toEqual(1);
        expect(minimumRemovals([5, 3, 4, 4, 0])).toEqual(0);
    });
});
