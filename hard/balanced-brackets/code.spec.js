const isBalanced = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isBalanced('()')).toEqual(true);
        expect(isBalanced('{[()]}')).toEqual(true);
        expect(isBalanced('{{[[(())]]}}')).toEqual(true);
        expect(isBalanced('{{[[(())[]]]}}')).toEqual(true);
        expect(isBalanced('[()]{}{[()()]()}')).toEqual(true);
        expect(isBalanced('{[([)]]}')).toEqual(false);
        expect(isBalanced('{[(')).toEqual(false);
        expect(isBalanced('])}')).toEqual(false);
        expect(isBalanced('[[]')).toEqual(false);
        expect(isBalanced('{)(}')).toEqual(false);
        expect(isBalanced('{{[[([())]]]}}')).toEqual(false);
        expect(isBalanced()).toEqual(undefined);
    });
});
