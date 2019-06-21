const find_index = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(find_index(['abc', 'ghj', 'banana', 'grape'], 'grape')).toEqual(3);
        expect(find_index(['a', 'b', 'c', 'd', 'e', 'f'], 'f')).toEqual(5);
        expect(find_index(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com')).toEqual(1);
    });
});
