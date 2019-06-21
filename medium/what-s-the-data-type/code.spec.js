const dataType = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(dataType([1, 2, 3, 4, 5])).toEqual('array');
        expect(dataType({key: 'value'})).toEqual('object');
        expect(dataType('This is an example string...')).toEqual('string');
        expect(dataType(2017)).toEqual('number');
        expect(dataType(true)).toEqual('boolean');
        expect(dataType(undefined)).toEqual('null');
        expect(dataType(undefined)).toEqual('undefined');
        expect(dataType(new Date())).toEqual('date');
    });
});
