const classifyRug = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(classifyRug([['a', 'a', 'b'], ['a', 'a', 'b']])).toEqual('horizontally symmetric');
        expect(classifyRug([['a']])).toEqual('perfect');
        expect(classifyRug([['a'], ['b'], ['a']])).toEqual('perfect');
        expect(classifyRug([['a'], ['b'], ['c']])).toEqual('vertically symmetric');
        expect(classifyRug([['a', 'b', 'a']])).toEqual('perfect');
        expect(classifyRug([['a', 'a']])).toEqual('perfect');
        expect(classifyRug([['d', 'a'], ['b', 'b'], ['d', 'a']])).toEqual('horizontally symmetric');
        expect(classifyRug([['d', 'a', 'a', 'a'], ['b', 'b', 'a', 'a'], ['d', 'a', 'a', 'a']])).toEqual('horizontally symmetric');
        expect(classifyRug([['a', 'a', 'a', 'a'], ['d', 'a', 'a', 'a']])).toEqual('imperfect');
    });
});
