const factorial = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(factorial(0)).toEqual(1);
        expect(factorial(5)).toEqual(120);
        expect(factorial(10)).toEqual(3628800);
    });
});
