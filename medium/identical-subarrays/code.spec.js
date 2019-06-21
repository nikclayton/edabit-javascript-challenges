const countIdentical = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countIdentical([[33, 33], [5], ['a', 'a'], [2, 2, 2], [1, 2, 2], [3, 1]])).toEqual(4);
        expect(countIdentical([[1], [2], [3], [4]])).toEqual(4);
        expect(countIdentical([[1, 2], [2, 3], [3, 4], [4, 4]])).toEqual(1);
        expect(countIdentical([['@', '@', '@', '@'], [2, 3], [3, 4], [4, 4]])).toEqual(2);
    });
});
