const simplify = require('./code');

describe('Tests', () => {
    test('should work for improper fractions', () => {
        expect(simplify('7/4')).toEqual('7/4');
    });
    
    test('the tests', () => {
        expect(simplify('5/7')).toEqual('5/7');
        expect(simplify('4/6')).toEqual('2/3');
        expect(simplify('11/10')).toEqual('11/10');
        expect(simplify('8/4')).toEqual('2');
        expect(simplify('6/4')).toEqual('3/2');
        expect(simplify('300/200')).toEqual('3/2');
        expect(simplify('50/25')).toEqual('2');
        expect(simplify('5/45')).toEqual('1/9');
    });
});
