const isInRange = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isInRange(4, {min: 0, max: 5})).toEqual(true);
        expect(isInRange(4, {min: 4, max: 5})).toEqual(true);
        expect(isInRange(4, {min: 0, max: 4})).toEqual(true);
        expect(isInRange(4, {min: 6, max: 10})).toEqual(false);
        expect(isInRange(11, {min: 6, max: 10})).toEqual(false);
        expect(isInRange(5, {min: 5, max: 5})).toEqual(true);
        expect(isInRange(1.5, {min: 1.25, max: 1.75})).toEqual(true);
        expect(isInRange(1.1, {min: 1.25, max: 1.75})).toEqual(false);
        expect(isInRange(1.8, {min: 1.25, max: 1.75})).toEqual(false);
        expect(isInRange(-1, {min: -1, max: 1})).toEqual(true);
    });
});
