const longestNonrepeatingSubstring = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(longestNonrepeatingSubstring('abcabcbb')).toEqual('abc');
        expect(longestNonrepeatingSubstring('aaaaaa')).toEqual('a');
        expect(longestNonrepeatingSubstring('abcde')).toEqual('abcde');
        expect(longestNonrepeatingSubstring('abcda')).toEqual('abcd');
        expect(longestNonrepeatingSubstring('aaccddeeffb')).toEqual('ac');
        expect(longestNonrepeatingSubstring('abdde')).toEqual('abd');
        expect(longestNonrepeatingSubstring('ccdddcccc')).toEqual('cd');
        expect(longestNonrepeatingSubstring('cdxdxccxc')).toEqual('cdx');
        expect(longestNonrepeatingSubstring('abddefgh')).toEqual('defgh');
        expect(longestNonrepeatingSubstring('abcdabcd')).toEqual('abcd');
        expect(longestNonrepeatingSubstring('abddebcc')).toEqual('debc');
        expect(longestNonrepeatingSubstring('xyxxyzyzy')).toEqual('xyz');
        expect(longestNonrepeatingSubstring('kjlmjsdeee')).toEqual('lmjsde');
        expect(longestNonrepeatingSubstring('kjlmjsdfew')).toEqual('lmjsdfew');
        expect(longestNonrepeatingSubstring('kjlmjsdfewii')).toEqual('lmjsdfewi');
        expect(longestNonrepeatingSubstring('kjlmjjiiiidfewii')).toEqual('idfew');
        expect(longestNonrepeatingSubstring('kjlmjjiiiidfiwii')).toEqual('kjlm');
    });
});
