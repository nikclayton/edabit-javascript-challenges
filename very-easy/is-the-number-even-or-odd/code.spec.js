const isEvenOrOdd = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isEvenOrOdd(3)).toEqual('odd');
        expect(isEvenOrOdd(0)).toEqual('even');
        expect(isEvenOrOdd(7)).toEqual('odd');
        expect(isEvenOrOdd(12)).toEqual('even');
        expect(isEvenOrOdd(6474)).toEqual('even');
        expect(isEvenOrOdd(371)).toEqual('odd');
        expect(isEvenOrOdd(3)).toEqual('odd');
        expect(isEvenOrOdd(153387008)).toEqual('even');
        expect(isEvenOrOdd(301)).toEqual('odd');
        expect(isEvenOrOdd(-3)).toEqual('odd');
        expect(isEvenOrOdd(-0)).toEqual('even');
        expect(isEvenOrOdd(-7)).toEqual('odd');
        expect(isEvenOrOdd(-12)).toEqual('even');
        expect(isEvenOrOdd(-6474)).toEqual('even');
        expect(isEvenOrOdd(-371)).toEqual('odd');
        expect(isEvenOrOdd(-3)).toEqual('odd');
        expect(isEvenOrOdd(-153387008)).toEqual('even');
        expect(isEvenOrOdd(-301)).toEqual('odd');
    });
});
