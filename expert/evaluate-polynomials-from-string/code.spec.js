const evalPolynomial = require('./code');

describe('Tests', () => {
    test('check exponentation', () => {
        expect(evalPolynomial('x^2', 2)).toEqual(4);
    });

test('check multiplication', () => {
        expect(evalPolynomial('2(x+2)+x(x-1)', 3)).toEqual(16);
    });

test('& not a valid mathematical expression', () => {
        expect(evalPolynomial('3x&2/8', 5)).toEqual('invalid');
    });

test('print(x) not a valid mathematical expression', () => {
        expect(evalPolynomial('print(x)', 6)).toEqual('invalid');
    });

test('// not a valid operator', () => {
        expect(evalPolynomial('x//2', 7)).toEqual('invalid');
    });

test('expression empty', () => {
        expect(evalPolynomial('', 8)).toEqual('invalid');
    });
    
    test('the tests', () => {
        expect(evalPolynomial('x+1', 1)).toEqual(2);
        expect(evalPolynomial('3x^2/8', 4)).toEqual(6);
    });
});
