const validColor = require('./code');

describe('Tests', () => {
    test('rgb lowest valid numbers', () => {
        expect(validColor('rgb(0,0,0)')).toEqual(true);
    });

test('rgb highest valid numbers', () => {
        expect(validColor('rgb(255,255,255)')).toEqual(true);
    });

test('rgba lowest valid numbers', () => {
        expect(validColor('rgba(0,0,0,0)')).toEqual(true);
    });

test('rgba highest valid numbers', () => {
        expect(validColor('rgba(255,255,255,1)')).toEqual(true);
    });

test('alpha can have many decimals', () => {
        expect(validColor('rgba(0,0,0,0.123456789)')).toEqual(true);
    });

test('in alpha the number before the dot is optional', () => {
        expect(validColor('rgba(0,0,0,.8)')).toEqual(true);
    });

test('whitespace is allowed around numbers (even tabs)', () => {
        expect(validColor('rgba(	0 , 127	, 255 , 0.1	)')).toEqual(true);
    });

test('numbers can be percentages', () => {
        expect(validColor('rgb(0%,50%,100%)')).toEqual(true);
    });

test('INVALID: missing number', () => {
        expect(validColor('rgb(0,,0)')).toEqual(false);
    });

test('INVALID: whitespace before parenthesis', () => {
        expect(validColor('rgb (0,0,0)')).toEqual(false);
    });

test('INVALID: rgb with 4 numbers', () => {
        expect(validColor('rgb(0,0,0,0)')).toEqual(false);
    });

test('INVALID: rgba with 3 numbers', () => {
        expect(validColor('rgba(0,0,0)')).toEqual(false);
    });

test('INVALID: numbers below 0', () => {
        expect(validColor('rgb(-1,0,0)')).toEqual(false);
    });

test('INVALID: numbers above 255', () => {
        expect(validColor('rgb(255,256,255)')).toEqual(false);
    });

test('INVALID: numbers above 100%', () => {
        expect(validColor('rgb(100%,100%,101%)')).toEqual(false);
    });

test('INVALID: alpha below 0', () => {
        expect(validColor('rgba(0,0,0,-1)')).toEqual(false);
    });

test('INVALID: alpha above 1', () => {
        expect(validColor('rgba(0,0,0,1.1)')).toEqual(false);
    });
});
