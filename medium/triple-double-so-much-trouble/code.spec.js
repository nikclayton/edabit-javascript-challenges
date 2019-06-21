const trouble = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(trouble(451999277, 41177722899)).toEqual(true);
        expect(trouble(444, 44)).toEqual(true);
        expect(trouble(1222345, 12345)).toEqual(false);
        expect(trouble(12345, 12345)).toEqual(false);
        expect(trouble(888, 888)).toEqual(true);
        expect(trouble(666789, 12345667)).toEqual(true);
        expect(trouble(10560002, 100)).toEqual(true);
        expect(trouble(1, 1)).toEqual(false);
        expect(trouble(9111922229333340, 9559669779)).toEqual(false);
    });
});
