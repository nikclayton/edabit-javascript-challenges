const tweakLetters = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(tweakLetters('apple', [0, 1, -1, 0, -1])).toEqual('aqold');
        expect(tweakLetters('many', [0, 0, 0, -1])).toEqual('manx');
        expect(tweakLetters('rhino', [1, 1, 1, 1, 1])).toEqual('sijop');
        expect(tweakLetters('xyz', [1, 1, 1])).toEqual('yza');
        expect(tweakLetters('abc', [-1, -1, -1])).toEqual('zab');
    });
});
