const findBrokenKeys = require('./code');

describe('Tests', () => {
    test('It should work for numbers.', () => {
        expect(findBrokenKeys('5678', '4678')).toEqual(['5']);
    });

test('It should work for punctuation.', () => {
        expect(findBrokenKeys('!!??$$', '$$!!??')).toEqual(['!', '?', '$']);
    });
    
    test('the tests', () => {
        expect(findBrokenKeys('happy birthday', 'hawwy birthday')).toEqual(['p']);
        expect(findBrokenKeys('starry night', 'starrq light')).toEqual(['y', 'n']);
        expect(findBrokenKeys('beethoven', 'affthoif5')).toEqual(['b', 'e', 'v', 'n']);
        expect(findBrokenKeys('mozart', 'aiwgvx')).toEqual(['m', 'o', 'z', 'a', 'r', 't']);
    });
});
