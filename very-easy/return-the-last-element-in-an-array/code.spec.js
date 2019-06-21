const getLastItem = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getLastItem(['Cat', 'Dog', 'Duck'])).toEqual('Duck');
        expect(getLastItem([1, 2, 3])).toEqual(3);
        expect(getLastItem([undefined])).toEqual(undefined);
        expect(getLastItem([true, false, false, true])).toEqual(true);
        expect(getLastItem([7, 'String', false, undefined, undefined])).toEqual(undefined);
        expect(getLastItem([false])).toEqual(false);
        expect(getLastItem([undefined, undefined, undefined])).toEqual(undefined);
        expect(getLastItem([1, 2, 3, 56, 87, 23, 65, 45])).toEqual(45);
        expect(getLastItem(['Apple', 'Orange', undefined])).toEqual(undefined);
        expect(getLastItem([true, false, 'Apple'])).toEqual('Apple');
        expect(getLastItem([undefined, undefined, undefined])).toEqual(undefined);
        expect(getLastItem([1])).toEqual(1);
    });
});
