const billSplit = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(billSplit(['N', 'S', 'N'], [10, 10, 20])).toEqual([25, 15]);
        expect(billSplit(['N', 'N'], [10, 10])).toEqual([10, 10]);
        expect(billSplit(['S', 'N'], [41, 10])).toEqual([46, 5]);
        expect(billSplit(['S', 'S', 'S', 'N', 'N'], [8, 9, 8, 7, 7])).toEqual([32, 7]);
        expect(billSplit(['N', 'N', 'N', 'S'], [40, 20, 20, 10])).toEqual([50, 40]);
    });
});
