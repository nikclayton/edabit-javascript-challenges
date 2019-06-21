const uniqueInOrder = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
        expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
        expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
        expect(uniqueInOrder('12333355555522211133')).toEqual(['1', '2', '3', '5', '2', '1', '3']);
        expect(uniqueInOrder('uuUfffFgGggYtt76%5$$$')).toEqual(['u', 'U', 'f', 'F', 'g', 'G', 'g', 'Y', 't', '7', '6', '%', '5', '$']);
        expect(uniqueInOrder(['1', '2', '2', '3', '3'])).toEqual(['1', '2', '3']);
        expect(uniqueInOrder([3, 7, 3, 8, 4])).toEqual([3, 7, 3, 8, 4]);
        expect(uniqueInOrder('ABC')).toEqual(['A', 'B', 'C']);
        expect(uniqueInOrder('$$$%%%$$$%%%')).toEqual(['$', '%', '$', '%']);
        expect(uniqueInOrder([1, 1, 1, 'A', 'B', 'B'])).toEqual([1, 'A', 'B']);
    });
});
