const factorChain = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(factorChain([1, 2, 4, 8, 16, 32])).toEqual(true);
        expect(factorChain([1, 1, 1, 1, 1, 1])).toEqual(true);
        expect(factorChain([2, 4, 6, 7, 12])).toEqual(false);
        expect(factorChain([10, 1])).toEqual(false);
        expect(factorChain([10, 20, 30, 40])).toEqual(false);
        expect(factorChain([10, 20, 40])).toEqual(true);
        expect(factorChain([1, 1, 1, 1, 7, 49])).toEqual(true);
    });
});
