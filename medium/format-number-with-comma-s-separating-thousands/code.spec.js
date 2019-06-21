const formatNum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(formatNum(1000)).toEqual('1,000');
        expect(formatNum(1000000)).toEqual('1,000,000');
        expect(formatNum(20)).toEqual('20');
        expect(formatNum(0)).toEqual('0');
        expect(formatNum(12948)).toEqual('12,948');
    });
});
