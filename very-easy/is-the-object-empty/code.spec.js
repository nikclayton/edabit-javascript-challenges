const isEmpty = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isEmpty({})).toEqual(true);
        expect(isEmpty({a: 1})).toEqual(false);
        expect(isEmpty({z: 2, w: 4, y: 5})).toEqual(false);
    });
});
