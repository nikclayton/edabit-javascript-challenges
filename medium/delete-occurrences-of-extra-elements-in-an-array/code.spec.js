const deleteOccurrences = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(deleteOccurrences([1, 1, 1, 1], 2)).toEqual([1, 1]);
        expect(deleteOccurrences([true, true, true], 3)).toEqual([true, true, true]);
        expect(deleteOccurrences([13, true, 13, undefined], 1)).toEqual([13, true, undefined]);
        expect(deleteOccurrences([], 100)).toEqual([]);
        expect(deleteOccurrences(['John', 'John', 'Marry', 'Marry'], 1)).toEqual(['John', 'Marry']);
        expect(deleteOccurrences(['Marry', 'John', undefined, 'John', false, 'John', 0, 'John', 'Marry', 'Marry', 'John'], 3)).toEqual(['Marry', 'John', undefined, 'John', false, 'John', 0, 'Marry', 'Marry']);
        expect(deleteOccurrences([20, 37, 20, 21], 1)).toEqual([20, 37, 21]);
        expect(deleteOccurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
        expect(deleteOccurrences([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3)).toEqual([1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]);
    });
});
