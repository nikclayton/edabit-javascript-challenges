const firstBeforeSecond = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(firstBeforeSecond('a rabbit jumps joyfully', 'a', 'j')).toEqual(true);
        expect(firstBeforeSecond('knaves knew about waterfalls', 'k', 'w')).toEqual(true);
        expect(firstBeforeSecond('maria makes money', 'm', 'o')).toEqual(true);
        expect(firstBeforeSecond('the hostess made pecan pie', 'h', 'p')).toEqual(true);
        expect(firstBeforeSecond('barry the butterfly flew away', 'b', 'f')).toEqual(true);
        expect(firstBeforeSecond('moody muggles', 'm', 'g')).toEqual(true);
        expect(firstBeforeSecond('happy birthday', 'a', 'y')).toEqual(false);
        expect(firstBeforeSecond('precarious kangaroos', 'k', 'a')).toEqual(false);
        expect(firstBeforeSecond('maria makes money', 'm', 'i')).toEqual(false);
        expect(firstBeforeSecond('taken by the beautiful sunrise', 'u', 's')).toEqual(false);
        expect(firstBeforeSecond('sharp cheddar biscuit', 't', 's')).toEqual(false);
        expect(firstBeforeSecond('moody muggles', 'm', 'o')).toEqual(false);
    });
});
