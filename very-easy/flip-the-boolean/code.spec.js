const reverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reverse(false)).toEqual(true);
        expect(reverse(true)).toEqual(false);
        expect(reverse(0)).toEqual('boolean expected');
        expect(reverse(undefined)).toEqual('boolean expected');
        expect(reverse(undefined)).toEqual('boolean expected');
        expect(reverse({})).toEqual('boolean expected');
    });
});
