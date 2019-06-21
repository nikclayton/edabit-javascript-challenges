const quadraticEquation = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(quadraticEquation(1, 2, -3)).toEqual(1);
        expect(quadraticEquation(2, -7, 3)).toEqual(3);
        expect(quadraticEquation(1, -12, -28)).toEqual(14);
    });
});
