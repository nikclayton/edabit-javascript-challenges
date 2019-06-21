const replace = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(replace('abcdef', 'c-e')).toEqual('ab###f');
        expect(replace('rattle', 'r-z')).toEqual('#a##le');
        expect(replace('microscopic', 'i-i')).toEqual('m#croscop#c');
        expect(replace('bountiful', 'a-o')).toEqual('##u#t##u#');
        expect(replace('zebra', 'a-z')).toEqual('#####');
        expect(replace('mount', 'a-e')).toEqual('mount');
        expect(replace('', 'a-z')).toEqual('');
    });
});
