const isWordChain = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isWordChain(['row', 'crow', 'crown', 'brown', 'brawn'])).toEqual(true);
        expect(isWordChain(['flew', 'flaw', 'flan', 'flat', 'fat', 'rat', 'rot', 'tot'])).toEqual(true);
        expect(isWordChain(['meek', 'meet', 'meat', 'teal'])).toEqual(false);
        expect(isWordChain(['run', 'runny', 'bunny'])).toEqual(false);
        expect(isWordChain(['fun', 'fund', 'find', 'bind', 'wind', 'wild', 'wile', 'wiles'])).toEqual(true);
        expect(isWordChain(['nut', 'but', 'bot', 'boot', 'loot', 'look', 'book', 'brook'])).toEqual(true);
        expect(isWordChain(['some', 'tome', 'tame', 'lame', 'flame', 'flamer', 'blamer', 'blamers'])).toEqual(true);
        expect(isWordChain(['a', 'at', 'hat', 'that', 'what', 'flat'])).toEqual(false);
        expect(isWordChain(['link', 'blink', 'wink', 'sink'])).toEqual(false);
    });
});
