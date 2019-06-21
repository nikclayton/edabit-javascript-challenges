const sockPairs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sockPairs('AA')).toEqual(1);
        expect(sockPairs('ABABC')).toEqual(2);
        expect(sockPairs('CABBACCC')).toEqual(4);
        expect(sockPairs('AACDE')).toEqual(1);
        expect(sockPairs('ACDBE')).toEqual(0);
        expect(sockPairs('')).toEqual(0);
        expect(sockPairs('ABABAB')).toEqual(2);
        expect(sockPairs('AAAAA')).toEqual(2);
        expect(sockPairs('AAACCBB')).toEqual(3);
    });
});
