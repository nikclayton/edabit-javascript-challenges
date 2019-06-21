const powerRanger = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(powerRanger(5, 31, 33)).toEqual(1);
        expect(powerRanger(4, 250, 1300)).toEqual(3);
        expect(powerRanger(2, 49, 65)).toEqual(2);
        expect(powerRanger(3, 1, 27)).toEqual(3);
        expect(powerRanger(10, 1, 5)).toEqual(1);
        expect(powerRanger(1, 1, 5)).toEqual(5);
        expect(powerRanger(2, 1, 100)).toEqual(10);
    });
});
