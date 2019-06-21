const keysAndValues = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(keysAndValues({a: 1, b: 2, c: 3})).toEqual([['a', 'b', 'c'], [1, 2, 3]]);
        expect(keysAndValues({a: 'Apple', b: 'Microsoft', c: 'Google'})).toEqual([['a', 'b', 'c'], ['Apple', 'Microsoft', 'Google']]);
        expect(keysAndValues({key1: true, key2: false, key3: undefined})).toEqual([['key1', 'key2', 'key3'], [true, false, undefined]]);
        expect(keysAndValues({1: undefined, 2: undefined, 3: undefined})).toEqual([['1', '2', '3'], [undefined, undefined, undefined]]);
        expect(keysAndValues({key1: 'cat', key2: 'dog', key3: undefined})).toEqual([['key1', 'key2', 'key3'], ['cat', 'dog', undefined]]);
    });
});
