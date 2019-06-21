const set = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(set([1, 3, 3, 5, 5])).toEqual([1, 3, 5]);
        expect(set([4, 4, 4, 4])).toEqual([4]);
        expect(set([5, 7, 8, 9, 10, 15])).toEqual([5, 7, 8, 9, 10, 15]);
        expect(set([5, 9, 9])).toEqual([5, 9]);
        expect(set([1, 2, 3, 4, 5, 5, 6, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(set([1, 1, 2, 2, 2])).toEqual([1, 2]);
        expect(set(['A', 'A', 'A', 'A'])).toEqual(['A']);
        expect(set(['A', 'B', 'C', 'D'])).toEqual(['A', 'B', 'C', 'D']);
    });
});
