const bell = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bell(1)).toEqual(1);
        expect(bell(2)).toEqual(2);
        expect(bell(3)).toEqual(5);
        expect(bell(4)).toEqual(15);
        expect(bell(5)).toEqual(52);
        expect(bell(6)).toEqual(203);
    });
});
