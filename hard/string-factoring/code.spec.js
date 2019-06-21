const stringFactor = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(stringFactor([2, 2, 2, 3, 3])).toEqual('2^3 x 3^2');
        expect(stringFactor([2, 7])).toEqual('2 x 7');
        expect(stringFactor([2, 3, 3])).toEqual('2 x 3^2');
        expect(stringFactor([2, 2, 2, 2, 2])).toEqual('2^5');
        expect(stringFactor([2, 3, 7])).toEqual('2 x 3 x 7');
        expect(stringFactor([2, 2, 7, 11])).toEqual('2^2 x 7 x 11');
        expect(stringFactor([11, 11, 11])).toEqual('11^3');
    });
});
