const repeat = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(repeat('mice', 5)).toEqual('mmmmmiiiiiccccceeeee');
        expect(repeat('hello', 3)).toEqual('hhheeellllllooo');
        expect(repeat('stop', 1)).toEqual('stop');
        expect(repeat('tomato', 2)).toEqual('ttoommaattoo');
    });
});
