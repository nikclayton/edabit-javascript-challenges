const fibonacci = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(fibonacci(3)).toEqual(3);
        expect(fibonacci(7)).toEqual(21);
        expect(fibonacci(12)).toEqual(233);
        expect(fibonacci(0)).toEqual(1);
        expect(fibonacci(1)).toEqual(1);
    });
});
