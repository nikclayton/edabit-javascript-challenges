const hello = require('./code');

describe('Tests', () => {
    test('Did you *return* the result?', () => {
        expect(hello()).toEqual('hello edabit.com');
    });
});
