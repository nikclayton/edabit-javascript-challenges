const numArgs = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numArgs()).toEqual(0);
        expect(numArgs('foo')).toEqual(1);
        expect(numArgs('foo', 'bar')).toEqual(2);
        expect(numArgs(undefined, undefined)).toEqual(2);
        expect(numArgs('foo', 'bar', 5, undefined)).toEqual(4);
        expect(numArgs(false)).toEqual(1);
        expect(numArgs('foo', {})).toEqual(2);
        expect(numArgs('foo', 'bar', {})).toEqual(3);
        expect(numArgs([], [], {})).toEqual(3);
        expect(numArgs('foo', 'bar', true, undefined, 0)).toEqual(5);
    });
});
