const routeDiff = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(routeDiff(['N', 'E', 'S', 'W'])).toEqual(4);
        expect(routeDiff(['N', 'N', 'N', 'E', 'N', 'E'])).toEqual(0);
        expect(routeDiff(['N', 'S', 'N', 'S', 'E', 'W', 'E', 'E'])).toEqual(6);
        expect(routeDiff(['N', 'S', 'N', 'S', 'E'])).toEqual(4);
        expect(routeDiff(['N', 'N', 'S', 'S', 'S', 'S', 'E'])).toEqual(4);
        expect(routeDiff(['N', 'N', 'S', 'S', 'W', 'S', 'E'])).toEqual(6);
        expect(routeDiff(['N', 'S', 'E'])).toEqual(2);
        expect(routeDiff(['S', 'S', 'S'])).toEqual(0);
        expect(routeDiff(['S', 'S', 'S', 'S', 'S', 'N'])).toEqual(2);
    });
});
