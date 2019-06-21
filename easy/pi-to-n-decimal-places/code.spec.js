const myPi = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(myPi(0)).toEqual(3);
        expect(myPi(1)).toEqual(3.1);
        expect(myPi(2)).toEqual(3.14);
        expect(myPi(3)).toEqual(3.142);
        expect(myPi(5)).toEqual(3.14159);
        expect(myPi(6)).toEqual(3.141593);
        expect(myPi(7)).toEqual(3.1415927);
        expect(myPi(8)).toEqual(3.14159265);
        expect(myPi(9)).toEqual(3.141592654);
        expect(myPi(10)).toEqual(3.1415926536);
        expect(myPi(11)).toEqual(3.14159265359);
        expect(myPi(12)).toEqual(3.14159265359);
        expect(myPi(13)).toEqual(3.1415926535898);
        expect(myPi(14)).toEqual(3.14159265358979);
        expect(myPi(15)).toEqual(3.141592653589793);
    });
});
