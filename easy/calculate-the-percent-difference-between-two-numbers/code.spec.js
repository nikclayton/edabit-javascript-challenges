const percentDiff = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(percentDiff(60, 100)).toEqual(50);
        expect(percentDiff(100, 60)).toEqual(50);
        expect(percentDiff(5439, 4538)).toEqual(18.1);
        expect(percentDiff(4538, 5439)).toEqual(18.1);
        expect(percentDiff(87, 26)).toEqual(108);
        expect(percentDiff(26, 87)).toEqual(108);
        expect(percentDiff(465, 112)).toEqual(122.4);
        expect(percentDiff(10438, 7345)).toEqual(34.8);
        expect(percentDiff(10, 5)).toEqual(66.7);
        expect(percentDiff(3, 100)).toEqual(188.3);
    });
});
