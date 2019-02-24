const timeSum = require('./code');

describe('Tests', () => {
    test('Should work with an empty array', () => {
        expect(timeSum([])).toEqual([0, 0, 0]);
    });

test('Should work with a single time', () => {
        expect(timeSum(['1:23:45'])).toEqual([1, 23, 45]);
    });

test('Should work with leading zeroes in minutes/seconds', () => {
        expect(timeSum(['1:03:45', '1:23:05'])).toEqual([2, 26, 50]);
    });

test('Should not break if a value is 0:00:00', () => {
        expect(timeSum(['1:23:45', '0:00:00'])).toEqual([1, 23, 45]);
    });

test('Should work with large arrays totaling more than 60 hours', () => {
        expect(timeSum(['18:54:02', '0:26:28', '11:48:22', '22:26:16', '7:17:05', '8:01:44', '0:35:24', '16:25:11', '9:11:24', '18:30:46', '3:31:51', '16:55:32', '17:59:00', '11:29:30', '3:19:58', '9:12:27', '22:03:34', '1:06:12', '0:44:07', '4:47:46', '10:38:00', '14:26:51', '10:09:07', '5:08:29', '5:29:57', '22:15:03', '20:52:28', '8:42:20', '17:36:32', '9:36:17'])).toEqual([329, 41, 43]);
    });
    
    test('the tests', () => {
        expect(timeSum(['5:39:42', '10:02:08', '8:26:33'])).toEqual([24, 8, 23]);
        expect(timeSum(['10:11:02', '8:57:30', '10:58:56', '4:04:17', '3:01:13'])).toEqual([37, 12, 58]);
        expect(timeSum(['10:39:35', '11:33:23', '2:34:52', '9:17:09', '4:41:57', '3:34:19', '1:31:26', '4:06:01'])).toEqual([47, 58, 42]);
    });
});
