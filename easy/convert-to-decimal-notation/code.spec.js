const convertToDecimal = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(convertToDecimal(['33%', '98.1%', '56.44%', '100%'])).toEqual([0.33, 0.981, 0.5644, 1]);
        expect(convertToDecimal(['45%', '32%', '97%', '33%'])).toEqual([0.45, 0.32, 0.97, 0.33]);
        expect(convertToDecimal(['1%', '2%', '3%'])).toEqual([0.01, 0.02, 0.03]);
    });
});
