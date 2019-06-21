const last = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(last([1, 2, 3, 4, 5], 0)).toEqual([]);
        expect(last([1, 2, 3, 4, 5], 1)).toEqual([5]);
        expect(last([4, 3, 9, 9, 7, 6], 3)).toEqual([9, 7, 6]);
        expect(last([5, 1, 2], 3)).toEqual([5, 1, 2]);
        expect(last([], 1)).toEqual('invalid');
        expect(last([1, 2, 3, 4, 5], 7)).toEqual('invalid');
    });
});
