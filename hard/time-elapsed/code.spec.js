const elapsed = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(elapsed(1559813526, 1559899926)).toEqual('1 day');
        expect(elapsed(1559681004, 1559899926)).toEqual('2 days, 12 hours, 48 minutes, 42 seconds');
        expect(elapsed(1557641659, 1559899926)).toEqual('26 days, 3 hours, 17 minutes, 47 seconds');
        expect(elapsed(1557652446, 1559899926)).toEqual('26 days, 18 minutes');
        expect(elapsed(1558773066, 1559899926)).toEqual('13 days, 1 hour, 1 minute');
        expect(elapsed(1552513985, 1559899926)).toEqual('85 days, 11 hours, 39 minutes, 1 second');
    });
});
