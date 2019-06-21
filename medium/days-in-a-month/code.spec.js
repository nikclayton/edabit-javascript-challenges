const days = require('./code');

describe('Tests', () => {
    test('Should show the correct day amount for January', () => {
        expect(days(1, 2018)).toEqual(31);
    });

test('Should show the correct day amount for February on a non-leap year', () => {
        expect(days(2, 2018)).toEqual(28);
    });

test('Should show the correct day amount for March', () => {
        expect(days(3, 2018)).toEqual(31);
    });

test('Should show the correct day amount for April', () => {
        expect(days(4, 2018)).toEqual(30);
    });

test('Should show the correct day amount for May', () => {
        expect(days(5, 2018)).toEqual(31);
    });

test('Should show the correct day amount for June', () => {
        expect(days(6, 2018)).toEqual(30);
    });

test('Should show the correct day amount for July', () => {
        expect(days(7, 2018)).toEqual(31);
    });

test('Should show the correct day amount for August', () => {
        expect(days(8, 2018)).toEqual(31);
    });

test('Should show the correct day amount for September', () => {
        expect(days(9, 2018)).toEqual(30);
    });

test('Should show the correct day amount for October', () => {
        expect(days(10, 2018)).toEqual(31);
    });

test('Should show the correct day amount for November', () => {
        expect(days(11, 2018)).toEqual(30);
    });

test('Should show the correct day amount for December', () => {
        expect(days(12, 2018)).toEqual(31);
    });

test('Should show the correct day amount for February on a leap year that is divisible by 4 but not 100', () => {
        expect(days(2, 2004)).toEqual(29);
    });

test('Should show the correct day amount for February on a leap year that is divisible by 100 but not 400 ', () => {
        expect(days(2, 1800)).toEqual(28);
    });

test('Should show the correct day amount for February on a leap year that is divisible by 100 and 400', () => {
        expect(days(2, 1600)).toEqual(29);
    });
});
