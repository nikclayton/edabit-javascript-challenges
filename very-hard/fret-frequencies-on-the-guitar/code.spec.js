const fretFreq = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(fretFreq(3, 21)).toEqual(659.26);
        expect(fretFreq(3, 15)).toEqual(466.17);
        expect(fretFreq(6, 17)).toEqual(220.01);
        expect(fretFreq(5, 12)).toEqual(220);
        expect(fretFreq(2, 5)).toEqual(329.63);
        expect(fretFreq(3, 9)).toEqual(329.63);
        expect(fretFreq(1, 16)).toEqual(830.62);
        expect(fretFreq(1, 4)).toEqual(415.31);
        expect(fretFreq(3, 16)).toEqual(493.89);
        expect(fretFreq(4, 6)).toEqual(207.65);
        expect(fretFreq(2, 13)).toEqual(523.25);
        expect(fretFreq(6, 12)).toEqual(164.82);
        expect(fretFreq(5, 16)).toEqual(277.18);
        expect(fretFreq(5, 19)).toEqual(329.63);
        expect(fretFreq(4, 0)).toEqual(146.83);
        expect(fretFreq(2, 6)).toEqual(349.23);
        expect(fretFreq(3, 9)).toEqual(329.63);
        expect(fretFreq(3, 5)).toEqual(261.63);
        expect(fretFreq(5, 18)).toEqual(311.13);
        expect(fretFreq(2, 23)).toEqual(932.32);
        expect(fretFreq(2, 16)).toEqual(622.25);
        expect(fretFreq(4, 6)).toEqual(207.65);
        expect(fretFreq(4, 9)).toEqual(246.94);
        expect(fretFreq(5, 8)).toEqual(174.61);
        expect(fretFreq(3, 1)).toEqual(207.65);
        expect(fretFreq(5, 17)).toEqual(293.66);
        expect(fretFreq(6, 18)).toEqual(233.09);
        expect(fretFreq(3, 23)).toEqual(740);
        expect(fretFreq(6, 14)).toEqual(185);
        expect(fretFreq(1, 2)).toEqual(370);
    });
});
