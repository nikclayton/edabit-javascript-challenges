const check = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(check([1, 2, 3])).toEqual('increasing');
        expect(check([3, 2, 1])).toEqual('decreasing');
        expect(check([1, 2, 1])).toEqual('neither');
        expect(check([1, 1, 2])).toEqual('neither');
        expect(check([1, 3, 5, 7, 9, 10])).toEqual('increasing');
        expect(check([5, 6, 5, 7, 9, 10])).toEqual('neither');
        expect(check([5, 7])).toEqual('increasing');
        expect(check([9, 7, 1])).toEqual('decreasing');
    });
});
