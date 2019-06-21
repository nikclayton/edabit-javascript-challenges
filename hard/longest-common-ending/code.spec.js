const longestCommonEnding = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(longestCommonEnding('pitiful', 'beautiful')).toEqual('tiful');
        expect(longestCommonEnding('truck', 'trick')).toEqual('ck');
        expect(longestCommonEnding('vote', 'asymptote')).toEqual('ote');
        expect(longestCommonEnding('multiplication', 'ration')).toEqual('ation');
        expect(longestCommonEnding('potent', 'tent')).toEqual('tent');
        expect(longestCommonEnding('skyscraper', 'carnivore')).toEqual('');
    });
});
