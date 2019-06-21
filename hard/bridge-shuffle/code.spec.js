const bridgeShuffle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bridgeShuffle(['A', 'A', 'A'], ['B', 'B', 'B'])).toEqual(['A', 'B', 'A', 'B', 'A', 'B']);
        expect(bridgeShuffle(['C', 'C', 'C', 'C'], ['D'])).toEqual(['C', 'D', 'C', 'C', 'C']);
        expect(bridgeShuffle([1, 3, 5, 7], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(bridgeShuffle([10, 9, 8], [1, 2, 3, 4])).toEqual([10, 1, 9, 2, 8, 3, 4]);
        expect(bridgeShuffle(['h', 'h', 'h'], ['a', 'a', 'a'])).toEqual(['h', 'a', 'h', 'a', 'h', 'a']);
    });
});
