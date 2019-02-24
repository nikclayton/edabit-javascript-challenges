const specialReverseString = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(specialReverseString('Edabit')).toEqual('Tibade');
        expect(specialReverseString('UPPER lower')).toEqual('REWOL reppu');
        expect(specialReverseString('1 23 456')).toEqual('6 54 321');
        expect(specialReverseString('Hello World!')).toEqual('!dlro Wolleh');
        expect(specialReverseString('Where\'s your dog Daisy?')).toEqual('?ysiadg odru oys \'erehw');
        expect(specialReverseString('addition(3, 2) ➞ 5')).toEqual('5➞)2,3(noit id d a');
        expect(specialReverseString('It\'s known that CSS means Cascading Style Sheets')).toEqual('Stee hsely tsgn IDA csacs Naemsscta Htnwo Nks\'ti');
    });
});
