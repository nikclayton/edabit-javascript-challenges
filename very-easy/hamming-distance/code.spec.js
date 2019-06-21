const hammingDistance = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(hammingDistance('abcde', 'bcdef')).toEqual(5);
        expect(hammingDistance('abcde', 'abcde')).toEqual(0);
        expect(hammingDistance('strong', 'strung')).toEqual(1);
    });
});
