const group = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(group([1, 2, 3, 4], 2)).toEqual([[1, 3], [2, 4]]);
        expect(group([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([[1, 3, 5, 7], [2, 4, 6]]);
        expect(group([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
        expect(group([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 3, 5], [2, 4, 6]]);
        expect(group([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 3, 5], [2, 4, 6]]);
        expect(group([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 4], [2, 5], [3, 6]]);
        expect(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)).toEqual([[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]);
        expect(group([1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([[1, 5], [2, 6], [3, 7], [4, 8]]);
    });
});
