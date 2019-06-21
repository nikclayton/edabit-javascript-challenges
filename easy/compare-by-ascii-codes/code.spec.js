const asciiSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(asciiSort(['hey', 'man'])).toEqual('man');
        expect(asciiSort(['majorly', 'then'])).toEqual('then');
        expect(asciiSort(['magic', 'kingdom'])).toEqual('magic');
        expect(asciiSort(['bored', 'shampoo'])).toEqual('bored');
        expect(asciiSort(['victory', 'careless'])).toEqual('victory');
    });
});
