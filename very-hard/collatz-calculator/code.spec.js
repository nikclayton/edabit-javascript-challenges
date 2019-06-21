const collatz = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(collatz(1)).toEqual([0, 1]);
        expect(collatz(3)).toEqual([7, 16]);
        expect(collatz(9)).toEqual([19, 52]);
        expect(collatz(27)).toEqual([111, 9232]);
        expect(collatz(81)).toEqual([22, 244]);
    });
});
