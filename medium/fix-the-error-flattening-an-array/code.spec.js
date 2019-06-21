const flatten = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
        expect(flatten([['a', 'b'], ['c', 'd']])).toEqual(['a', 'b', 'c', 'd']);
        expect(flatten([[true, false], [false, false]])).toEqual([true, false, false, false]);
    });
});
