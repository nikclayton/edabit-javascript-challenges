const validate = require('./code');

describe('Tests', () => {
    test('invalid digit clusters', () => {
        expect(validate('89-445-7663')).toEqual(false);
    });

test('invalid digit clusters', () => {
        expect(validate('(892) 4454-7663')).toEqual(false);
    });

test('additional space', () => {
        expect(validate('892  567 8901')).toEqual(false);
    });

test('invalid delimiter', () => {
        expect(validate('892?567?8901')).toEqual(false);
    });

test('invalid international code', () => {
        expect(validate('!1-892-567-8901')).toEqual(false);
    });

test('invalid digit clusters', () => {
        expect(validate('(8924) 445-7663')).toEqual(false);
    });

test('invalid international code', () => {
        expect(validate('12 892 445-7663')).toEqual(false);
    });

test('invalid delimiter', () => {
        expect(validate('1&892&445-7663')).toEqual(false);
    });

test('invalid digit clusters', () => {
        expect(validate('894-445-766')).toEqual(false);
    });

test('invalid digit clusters', () => {
        expect(validate('894 445 766')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(validate('+1-892-445-7663')).toEqual(true);
        expect(validate('1-892-445-7663')).toEqual(true);
        expect(validate('1 (892) 445-7663')).toEqual(true);
        expect(validate('1.892.567.8901')).toEqual(true);
        expect(validate('1/892/567/8901')).toEqual(true);
        expect(validate('1 892 567 8901')).toEqual(true);
        expect(validate('18925678901')).toEqual(true);
        expect(validate('892-445-7663')).toEqual(true);
        expect(validate('(892) 445-7663')).toEqual(true);
        expect(validate('892.567.8901')).toEqual(true);
        expect(validate('892/567/8901')).toEqual(true);
        expect(validate('892 567 8901')).toEqual(true);
        expect(validate('8925678901')).toEqual(true);
    });
});
