const chunkify = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(chunkify([2, 3, 4, 5], 2)).toEqual([[2, 3], [4, 5]]);
        expect(chunkify([2, 3, 4, 5, 6], 2)).toEqual([[2, 3], [4, 5], [6]]);
        expect(chunkify([2, 3, 4, 5, 6, 7], 3)).toEqual([[2, 3, 4], [5, 6, 7]]);
        expect(chunkify([2, 3, 4, 5, 6, 7], 1)).toEqual([[2], [3], [4], [5], [6], [7]]);
        expect(chunkify([2, 3, 4, 5, 6, 7], 7)).toEqual([[2, 3, 4, 5, 6, 7]]);
        expect(chunkify([2, 3, 4, 5], 3)).toEqual([[2, 3, 4], [5]]);
        expect(chunkify([2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[2, 3, 4], [5, 6, 7], [8]]);
    });
});
