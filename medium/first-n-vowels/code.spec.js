const firstNVowels = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(firstNVowels('sharpening skills', 3)).toEqual('aei');
        expect(firstNVowels('major league', 5)).toEqual('aoeau');
        expect(firstNVowels('crabby patty', 2)).toEqual('aa');
        expect(firstNVowels('shrimp', 1)).toEqual('i');
        expect(firstNVowels('shrimpy', 2)).toEqual('invalid');
        expect(firstNVowels('hostess', 5)).toEqual('invalid');
    });
});
