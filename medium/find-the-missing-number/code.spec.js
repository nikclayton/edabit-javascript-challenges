const missingNums = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10])).toEqual(5);
        expect(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8])).toEqual(10);
        expect(missingNums([7, 2, 3, 9, 4, 5, 6, 8, 10])).toEqual(1);
        expect(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9])).toEqual(7);
        expect(missingNums([1, 7, 2, 4, 8, 10, 5, 6, 9])).toEqual(3);
    });
});
