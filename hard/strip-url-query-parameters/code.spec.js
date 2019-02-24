const stripUrlParams = require('./code');

describe('Tests', () => {
    test('The 2nd argument can contain multiple URL params.', () => {
        expect(stripUrlParams('https://edabit.com?a=1&b=2&c=3&d=4', ['a', 'd'])).toEqual('https://edabit.com?b=2&c=3');
    });
    
    test('the tests', () => {
        expect(stripUrlParams('https://edabit.com?a=1&b=2&a=2')).toEqual('https://edabit.com?a=2&b=2');
        expect(stripUrlParams('https://edabit.com?a=1&b=2&a=2', ['b'])).toEqual('https://edabit.com?a=2');
        expect(stripUrlParams('https://edabit.com', ['b'])).toEqual('https://edabit.com');
        expect(stripUrlParams('https://edabit.com?a=1&b=2')).toEqual('https://edabit.com?a=1&b=2');
        expect(stripUrlParams('https://edabit.com?a=1&b=2', ['c'])).toEqual('https://edabit.com?a=1&b=2');
        expect(stripUrlParams('https://edabit.com?a=1&b=2&c=3&d=4&c=5', ['a', 'd'])).toEqual('https://edabit.com?b=2&c=5');
    });
});
