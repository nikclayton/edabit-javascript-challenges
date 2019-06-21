const splitGroups = require('./code');

describe('Tests', () => {
    test('It should work with special chars.', () => {
        expect(splitGroups('abbbcc88999&&!!!_')).toEqual(['a', 'bbb', 'cc', '88', '999', '&&', '!!!', '_']);
    });
    
    test('the tests', () => {
        expect(splitGroups('aaabbbaabbab')).toEqual(['aaa', 'bbb', 'aa', 'bb', 'a', 'b']);
        expect(splitGroups('5556667788')).toEqual(['555', '666', '77', '88']);
        expect(splitGroups('555')).toEqual(['555']);
        expect(splitGroups('AABBCC')).toEqual(['AA', 'BB', 'CC']);
    });
});
