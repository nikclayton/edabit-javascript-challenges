const smallestTransform = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(smallestTransform(399)).toEqual(6);
        expect(smallestTransform(1234)).toEqual(4);
        expect(smallestTransform(153)).toEqual(4);
        expect(smallestTransform(33338)).toEqual(5);
        expect(smallestTransform(7777)).toEqual(0);
        expect(smallestTransform(977)).toEqual(2);
        expect(smallestTransform(589)).toEqual(4);
    });
});
