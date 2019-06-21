const missingAngle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(missingAngle(27, 59)).toEqual('obtuse');
        expect(missingAngle(135, 11)).toEqual('acute');
        expect(missingAngle(45, 45)).toEqual('right');
        expect(missingAngle(45, 15)).toEqual('obtuse');
        expect(missingAngle(31, 100)).toEqual('acute');
        expect(missingAngle(35, 55)).toEqual('right');
    });
});
