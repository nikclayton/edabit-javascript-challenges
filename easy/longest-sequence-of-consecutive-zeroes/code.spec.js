const longestZero = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(longestZero('01100001011000')).toEqual('0000');
        expect(longestZero('100100100')).toEqual('00');
        expect(longestZero('111101')).toEqual('0');
        expect(longestZero('1000000000011101')).toEqual('0000000000');
        expect(longestZero('100001110000100000')).toEqual('00000');
        expect(longestZero('101001101')).toEqual('00');
        expect(longestZero('101010101')).toEqual('0');
        expect(longestZero('1001001')).toEqual('00');
        expect(longestZero('111111')).toEqual('');
    });
});
