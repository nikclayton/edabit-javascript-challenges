const rollingCipher = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(rollingCipher('abcd', 1)).toEqual('bcde');
        expect(rollingCipher('abcd', -1)).toEqual('zabc');
        expect(rollingCipher('abcd', 3)).toEqual('defg');
        expect(rollingCipher('abcd', 25)).toEqual('zabc');
        expect(rollingCipher('abcd', 26)).toEqual('abcd');
        expect(rollingCipher('abcd', 27)).toEqual('bcde');
        expect(rollingCipher('abcd', 0)).toEqual('abcd');
    });
});
