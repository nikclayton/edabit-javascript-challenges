const flipArray = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(flipArray([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
        expect(flipArray([[5], [6], [9]])).toEqual([5, 6, 9]);
        expect(flipArray([[7], [8], [9], [55]])).toEqual([7, 8, 9, 55]);
        expect(flipArray([7, 8, 9, 55])).toEqual([[7], [8], [9], [55]]);
        expect(flipArray([[1], [2]])).toEqual([1, 2]);
        expect(flipArray([5, 8])).toEqual([[5], [8]]);
        expect(flipArray([2])).toEqual([[2]]);
        expect(flipArray([])).toEqual([]);
    });
});
