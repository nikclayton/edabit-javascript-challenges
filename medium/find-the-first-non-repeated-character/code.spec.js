const firstNonRepeatedCharacter = require('./code');

describe('Tests', () => {
    test('Return false when every character repeats.', () => {
        expect(firstNonRepeatedCharacter('hheelloo')).toEqual(false);
    });

test('An empty string should return false.', () => {
        expect(firstNonRepeatedCharacter('')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(firstNonRepeatedCharacter('the quick brown fox jumps then quickly blows air')).toEqual('f');
        expect(firstNonRepeatedCharacter('the misty examination pleases into the drab county')).toEqual('x');
        expect(firstNonRepeatedCharacter('it was then the darling top met the whispering wing')).toEqual('d');
        expect(firstNonRepeatedCharacter('it was then the frothy word met the round night')).toEqual('a');
        expect(firstNonRepeatedCharacter('is the remind zone better than the section')).toEqual('m');
        expect(firstNonRepeatedCharacter('b')).toEqual('b');
        expect(firstNonRepeatedCharacter('what if the brainy boss ate the afternoon')).toEqual('w');
        expect(firstNonRepeatedCharacter('the sympathetic mixture rejects into the leafy objective')).toEqual('p');
    });
});
