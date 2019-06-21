const comp = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(comp('AB', 'CD')).toEqual(true);
        expect(comp('ABC', 'DE')).toEqual(false);
        expect(comp('hello', 'edabit')).toEqual(false);
        expect(comp('meow', 'woof')).toEqual(true);
        expect(comp('jrnvjrnnt', 'cvjknfjvmfvnfjn')).toEqual(false);
        expect(comp('jkvnjrt', 'krnf')).toEqual(false);
        expect(comp('Facebook', 'Snapchat')).toEqual(true);
    });
});
