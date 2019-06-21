const filterDigitLength = require('./code');

describe('Tests', () => {
    test('Should return empty array if no numbers of specified length exist.', () => {
        expect(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)).toEqual([]);
    });

test('Should return original array if every digit is that length.', () => {
        expect(filterDigitLength([5, 6, 8, 9], 1)).toEqual([5, 6, 8, 9]);
    });
    
    test('the tests', () => {
        expect(filterDigitLength([88, 232, 4, 9721, 555], 3)).toEqual([232, 555]);
        expect(filterDigitLength([2, 7, 8, 9, 1012], 1)).toEqual([2, 7, 8, 9]);
        expect(filterDigitLength([99, 838, 435, 7666, 989, 431], 3)).toEqual([838, 435, 989, 431]);
        expect(filterDigitLength([99, 838, 435, 7666, 989, 431], 2)).toEqual([99]);
    });
});
