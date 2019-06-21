const multiplicity = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(multiplicity([1, 1, 1, 2, 2, 3])).toEqual([[1, 3], [2, 2], [3, 1]]);
        expect(multiplicity([1, 1, 1, 1, 1])).toEqual([[1, 5]]);
        expect(multiplicity([1, 5, 4, 3, 2])).toEqual([[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]]);
        expect(multiplicity([5, 5, 5, 5, 8])).toEqual([[5, 4], [8, 1]]);
        expect(multiplicity([3, 3, 3, 0])).toEqual([[3, 3], [0, 1]]);
        expect(multiplicity([1, 1, 2, 2, 3, 3, 4, 4])).toEqual([[1, 2], [2, 2], [3, 2], [4, 2]]);
        expect(multiplicity([4, 4, 3, 3, 2, 2, 1, 1])).toEqual([[4, 2], [3, 2], [2, 2], [1, 2]]);
    });
});
