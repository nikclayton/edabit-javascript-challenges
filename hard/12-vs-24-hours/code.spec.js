const convertTime = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(convertTime('12:00 am')).toEqual('0:00');
        expect(convertTime('6:20 pm')).toEqual('18:20');
        expect(convertTime('21:00')).toEqual('9:00 pm');
        expect(convertTime('5:05')).toEqual('5:05 am');
    });
});
