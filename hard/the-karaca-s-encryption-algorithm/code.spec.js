const encrypt = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(encrypt('karaca')).toEqual('0c0r0kaca');
        expect(encrypt('burak')).toEqual('k0r3baca');
        expect(encrypt('banana')).toEqual('0n0n0baca');
        expect(encrypt('alpaca')).toEqual('0c0pl0aca');
        expect(encrypt('hello')).toEqual('2ll1haca');
    });
});
