const validateSubsets = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(validateSubsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3])).toEqual(true);
        expect(validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3])).toEqual(true);
        expect(validateSubsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3])).toEqual(false);
        expect(validateSubsets([[1, 2, 3, 4]], [1, 2, 3])).toEqual(false);
        expect(validateSubsets([['a', 'b'], ['b', 'c'], ['a', 'c']], ['a', 'b', 'c'])).toEqual(true);
        expect(validateSubsets([['a', 'b', 'c'], ['b'], ['c'], []], ['a', 'b', 'c'])).toEqual(true);
        expect(validateSubsets([['a', 'b'], ['b', 'c'], ['a', 'd']], ['a', 'b', 'c'])).toEqual(false);
        expect(validateSubsets([['a', 'b', 'c', 'd']], ['a', 'b', 'c'])).toEqual(false);
        expect(validateSubsets([[true, false], [true]], [true, false])).toEqual(true);
        expect(validateSubsets([[true], [false], []], [true, false])).toEqual(true);
        expect(validateSubsets([[true], [true, false]], [true])).toEqual(false);
        expect(validateSubsets([[false]], [true])).toEqual(false);
    });
});
