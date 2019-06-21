const firstLast = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(firstLast([5, 10, 15, 20, 25])).toEqual([5, 25]);
        expect(firstLast(['edabit', 13, undefined, false, true])).toEqual(['edabit', true]);
        expect(firstLast([undefined, 4, '6', 'hello', undefined])).toEqual([undefined, undefined]);
        expect(firstLast(['hello', 'edabit', 'dot', 'com'])).toEqual(['hello', 'com']);
        expect(firstLast([3, 2, 1])).toEqual([3, 1]);
        expect(firstLast(['one', 'two'])).toEqual(['one', 'two']);
        expect(firstLast([false, false, true, false, false, true, false])).toEqual([false, false]);
    });
});
