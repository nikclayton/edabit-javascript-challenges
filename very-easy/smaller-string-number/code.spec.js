const smallerNum = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(smallerNum('21', '44')).toEqual('21');
        expect(smallerNum('153', '367')).toEqual('153');
        expect(smallerNum('1500', '16')).toEqual('16');
        expect(smallerNum('100', '23')).toEqual('23');
        expect(smallerNum('1500', '1')).toEqual('1');
        expect(smallerNum('5', '5')).toEqual('5');
    });
});
