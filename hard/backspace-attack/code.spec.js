const erase = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(erase('he##l#hel#llo')).toEqual('hello');
        expect(erase('major# spar##ks')).toEqual('majo spks');
        expect(erase('si###t boy')).toEqual('t boy');
        expect(erase('motion #sick')).toEqual('motionsick');
        expect(erase('m#oti#o#n sick##ne#ss##')).toEqual('otn sin');
        expect(erase('courz#i#age')).toEqual('courage');
        expect(erase('aris##### c#r#ti#c')).toEqual(' tc');
        expect(erase('beauty##')).toEqual('beau');
        expect(erase('beauty#')).toEqual('beaut');
        expect(erase('b#')).toEqual('');
        expect(erase('####')).toEqual('');
    });
});
