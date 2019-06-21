const isValidIP = require('./code');

describe('Tests', () => {
    test('This is a valid IPv4', () => {
        expect(isValidIP('12.255.56.1')).toEqual(true);
    });

test('This is a valid IPv4', () => {
        expect(isValidIP('1.2.3.4')).toEqual(true);
    });

test('IPv4 contain exactly four octets.', () => {
        expect(isValidIP('1.2.3')).toEqual(false);
    });

test('IPv4 contain exactly four octets.', () => {
        expect(isValidIP('1.2.3.4.5')).toEqual(false);
    });

test('This is a valid IPv4', () => {
        expect(isValidIP('123.45.67.89')).toEqual(true);
    });

test('Each octet must be a decimal value between 0 and 255.', () => {
        expect(isValidIP('123.456.78.90')).toEqual(false);
    });

test('Each octet must be a decimal value between 0 and 255.', () => {
        expect(isValidIP('123.045.067.089')).toEqual(false);
    });

test('An empty string is invalid.', () => {
        expect(isValidIP('')).toEqual(false);
    });

test('This is not in dot decimal format.', () => {
        expect(isValidIP('abc.def.ghi.jkl')).toEqual(false);
    });

test('Each octet must be a decimal value between 0 and 255.', () => {
        expect(isValidIP('123.456.789.0')).toEqual(false);
    });

test('IPv4 contain exactly four octets.', () => {
        expect(isValidIP('12.34.56')).toEqual(false);
    });

test('Check for spaces.', () => {
        expect(isValidIP('12.34.56 .1')).toEqual(false);
    });

test('Check for invalid characters.', () => {
        expect(isValidIP('12.34.56.-1')).toEqual(false);
    });

test('Each octet must be a decimal value between 0 and 255.', () => {
        expect(isValidIP('123.045.067.089')).toEqual(false);
    });

test('This is a valid IPv4', () => {
        expect(isValidIP('192.168.1.1')).toEqual(true);
    });

test('IPs with trailing spaces are invalid.', () => {
        expect(isValidIP('192.168.1.1  ')).toEqual(false);
    });

test('IPs with leading spaces are invalid.', () => {
        expect(isValidIP('  192.168.1.1')).toEqual(false);
    });

test('This is a valid IPv4', () => {
        expect(isValidIP('0.232.47.227')).toEqual(true);
    });

test('Each octet must be a decimal value between 0 and 255.', () => {
        expect(isValidIP('1e0.1e0.1e0.1e0')).toEqual(false);
    });
});
