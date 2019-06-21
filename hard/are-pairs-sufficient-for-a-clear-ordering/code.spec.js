const clearOrdering = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(clearOrdering([['D', 'A'], ['C', 'B'], ['A', 'C']])).toEqual(true);
        expect(clearOrdering([['D', 'A'], ['B', 'A'], ['C', 'D']])).toEqual(false);
        expect(clearOrdering([['S', 'T'], ['T', 'U'], ['U', 'V']])).toEqual(true);
        expect(clearOrdering([['T', 'S'], ['T', 'U'], ['U', 'V'], ['V', 'W']])).toEqual(false);
        expect(clearOrdering([['A', 'D'], ['C', 'D']])).toEqual(false);
        expect(clearOrdering([['A', 'D'], ['D', 'C']])).toEqual(true);
        expect(clearOrdering([['c', 'd'], ['a', 'b'], ['b', 'c']])).toEqual(true);
        expect(clearOrdering([['d', 'c'], ['a', 'b'], ['b', 'c']])).toEqual(false);
        expect(clearOrdering([['a', 'b'], ['b', 'c'], ['c', 'd'], ['e', 'f'], ['d', 'e']])).toEqual(true);
        expect(clearOrdering([['b', 'a'], ['b', 'c'], ['c', 'd'], ['e', 'f'], ['d', 'e']])).toEqual(false);
    });
});
