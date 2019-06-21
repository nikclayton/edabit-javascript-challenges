const largestSwap = require('./code');

describe('Tests', () => {
    test('27 < 72, so not largest swap.', () => {
        expect(largestSwap(27)).toEqual(false);
    });

test('43 > 34, so largest swap.', () => {
        expect(largestSwap(43)).toEqual(true);
    });

test('14 < 41, so not largest swap.', () => {
        expect(largestSwap(14)).toEqual(false);
    });

test('53 > 35, so largest swap.', () => {
        expect(largestSwap(53)).toEqual(true);
    });

test('Cannot do better, so largest swap.', () => {
        expect(largestSwap(99)).toEqual(true);
    });
});
