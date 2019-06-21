const getIndices = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getIndices(['a', 'a', 'b', 'a', 'b', 'a'], 'a')).toEqual([0, 1, 3, 5]);
        expect(getIndices([1, 5, 5, 2, 7], 7)).toEqual([4]);
        expect(getIndices([1, 5, 5, 2, 7], 5)).toEqual([1, 2]);
        expect(getIndices([1, 5, 5, 2, 7], 8)).toEqual([]);
        expect(getIndices([8, 8, 8, 8, 8], 8)).toEqual([0, 1, 2, 3, 4]);
        expect(getIndices([8, 8, 7, 8, 8], 8)).toEqual([0, 1, 3, 4]);
        expect(getIndices([true, false, true, false], true)).toEqual([0, 2]);
        expect(getIndices([true, false, true, false], false)).toEqual([1, 3]);
    });
});
