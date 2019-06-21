const truncatable = require('./code');

describe('Tests', () => {
    test('single-digit number treated as both', () => {
        expect(truncatable(5)).toEqual('both');
    });

test('the starting number is composite', () => {
        expect(truncatable(2317)).toEqual(false);
    });

test('1 is not a prime', () => {
        expect(truncatable(131)).toEqual(false);
    });

test('cannot contain a 0 digit', () => {
        expect(truncatable(6043)).toEqual(false);
    });
    
    test('the tests', () => {
        expect(truncatable(47)).toEqual('left');
        expect(truncatable(347)).toEqual('left');
        expect(truncatable(62383)).toEqual('left');
        expect(truncatable(79)).toEqual('right');
        expect(truncatable(7331)).toEqual('right');
        expect(truncatable(233993)).toEqual('right');
        expect(truncatable(3797)).toEqual('both');
        expect(truncatable(739397)).toEqual('both');
        expect(truncatable(349)).toEqual(false);
    });
});
