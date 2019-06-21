const threeDaysAgo = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(threeDaysAgo(new Date(2017, 1, 1))).toEqual('2017-01-29');
        expect(threeDaysAgo(new Date(1950, 6, 8))).toEqual('1950-07-05');
        expect(threeDaysAgo(new Date(1965, 3, 15))).toEqual('1965-04-12');
        expect(threeDaysAgo(new Date(2025, 4, 24))).toEqual('2025-05-21');
        expect(threeDaysAgo(new Date(1965, 3, 15))).toEqual('1965-04-12');
        expect(threeDaysAgo(new Date(2015, 5, 17))).toEqual('2015-06-14');
    });
});
