const divisible = require('./code');

describe('Tests', () => {
    test('Don\'t forget negatives', () => {
        expect(divisible(-1)).toEqual(false);
    });

test('Cover the 0 cases', () => {
        expect(divisible(0)).toEqual(true);
    });

test('-100 is divisible by 100', () => {
        expect(divisible(-100)).toEqual(true);
    });
    
    test('the tests', () => {
        expect(divisible(1)).toEqual(false);
        expect(divisible(100)).toEqual(true);
        expect(divisible(1000)).toEqual(true);
        expect(divisible(111000)).toEqual(true);
    });
});
