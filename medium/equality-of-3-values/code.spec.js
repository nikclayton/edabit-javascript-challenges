const equal = require('./code');

describe('Tests', () => {
    test('All values are differents', () => {
        expect(equal(2, 3, 4)).toEqual(0);
    });

test('Two values are equal', () => {
        expect(equal(7, 3, 7)).toEqual(2);
    });

test('All 3 values are equal', () => {
        expect(equal(4, 4, 4)).toEqual(3);
    });

test('All values are differents', () => {
        expect(equal(7, 3, 4)).toEqual(0);
    });

test('Two values are equal', () => {
        expect(equal(3, 3, 6)).toEqual(2);
    });

test('All 3 values are equal', () => {
        expect(equal(1, 1, 1)).toEqual(3);
    });

test('All values are differents', () => {
        expect(equal(1, 7, 6)).toEqual(0);
    });

test('All 3 values are equal', () => {
        expect(equal(7, 7, 7)).toEqual(3);
    });
});
