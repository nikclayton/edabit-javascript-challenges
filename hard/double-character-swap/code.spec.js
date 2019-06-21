const doubleSwap = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(doubleSwap('aabbccc', 'a', 'b')).toEqual('bbaaccc');
        expect(doubleSwap('random w#rds writt&n h&r&', '#', '&')).toEqual('random w&rds writt#n h#r#');
        expect(doubleSwap('128 895 556 788 999', '8', '9')).toEqual('129 985 556 799 888');
        expect(doubleSwap('mamma mia', 'm', 'a')).toEqual('amaam aim');
        expect(doubleSwap('**##**', '*', '#')).toEqual('##**##');
        expect(doubleSwap('123456789', '4', '5')).toEqual('123546789');
        expect(doubleSwap('445566&&', '4', '&')).toEqual('&&556644');
        expect(doubleSwap('!?@,.', ',', '.')).toEqual('!?@.,');
        expect(doubleSwap('Q_Q T_T =.= >.<', 'Q', 'T')).toEqual('T_T Q_Q =.= >.<');
        expect(doubleSwap('(Q_Q) (T_T) (=.=) (>.<)', ')', '(')).toEqual(')Q_Q( )T_T( )=.=( )>.<(');
        expect(doubleSwap('<>', '>', '<')).toEqual('><');
        expect(doubleSwap('001101', '1', '0')).toEqual('110010');
        expect(doubleSwap('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~', 'a', 'b')).toEqual('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`bacdefghijklmnopqrstuvwxyz{|}~');
    });
});
