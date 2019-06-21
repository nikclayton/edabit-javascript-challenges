const nomNom = require('./code');

describe('Tests', () => {
    test('1 cannot eat 2, so numbers remain uneaten.', () => {
        expect(nomNom([1, 2, 3])).toEqual([1, 2, 3]);
    });

test('2 can eat 1 to become 3. 3 cannot eat 3.', () => {
        expect(nomNom([2, 1, 3])).toEqual([3, 3]);
    });

test('8 eats 5 to become 13, 13 eats 9 to become 22.', () => {
        expect(nomNom([8, 5, 9])).toEqual([22]);
    });

test('5 eats 3 to become 8. 8 eats 7 to become 15.', () => {
        expect(nomNom([5, 3, 7])).toEqual([15]);
    });

test('5 eats 3 to become 8. 8 cannot eat 9.', () => {
        expect(nomNom([5, 3, 9])).toEqual([8, 9]);
    });

test('6 eats 5 to become 11. 11 eats 7 to become 17. 17 cannot eat 100.', () => {
        expect(nomNom([6, 5, 6, 100])).toEqual([17, 100]);
    });
});
